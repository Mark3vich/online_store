using System.Collections.Generic;
using System.Linq;

namespace backend.Search
{
    public class Index
    {
        private readonly string indexedCharacters = "abcdefghijklmnopqrstuvwxyz01234567890+абвгдежзиклмнопрстуфхцчшщуыьъэюя";
        private readonly HashSet<char> indexedCharactersSet;
        private readonly Dictionary<string, List<int>> buckets;
        public Index()
        {
            indexedCharactersSet = indexedCharacters.ToHashSet();
            buckets = CreateBucketsDictionary();
        }

        private Dictionary<string, List<int>> CreateBucketsDictionary()
        {
            var dict = new Dictionary<string, List<int>>();
            foreach (var first in indexedCharacters)
            {
                foreach (var second in indexedCharacters)
                {
                    foreach (var third in indexedCharacters)
                    {
                        var key = "" + first + second + third;
                        dict[key] = new List<int>();
                    }
                }
            }

            return dict;
        }

        public void Add(string key, int value)
        {
            var trigrams = ListTrigrams(key);
            foreach (var trigram in trigrams)
            {
                buckets[trigram].Add(value);
            }
        }

        private List<string> ListTrigrams(string value)
        {
            value = value.ToLower();
            var chars = value.Where(indexedCharactersSet.Contains).ToArray();
            var trigrams = new List<string>();
            for (var i = 0; i < chars.Length - 2; i++)
            {
                var trigram = "" + chars[i] + chars[i + 1] + chars[i + 2];
                trigrams.Add(trigram);
            }

            trigrams = trigrams.Distinct().ToList();
            return trigrams;
        }
        public int[] SearchFlexible(string query, int count)
        {
            var trigrams = ListTrigrams(query);
            var orderedBuckets = trigrams
                .Select(t => buckets[t])
                .Where(b => b.Count > 0)
                .OrderBy(b => b.Count)
                .ToList();
            var scores = new Dictionary<int, double>();
            foreach (var bucket in orderedBuckets)
            {
                foreach (var value in bucket)
                {
                    scores.TryGetValue(value, out var score);
                    if (scores.Count < 10000 || score > 0)
                    {
                        scores[value] = score + 1 / Math.Sqrt(bucket.Count + 20);
                    }
                }
            }

            var result = scores
                .OrderByDescending(p => p.Value)
                .Select(p => p.Key)
                .Take(count)
                .ToArray();
            return result;
        }
    }
}

