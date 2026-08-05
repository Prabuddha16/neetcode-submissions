class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        HashMap<String, List<String>> smp = new HashMap<>();

        for(String s: strs){
            char[] ch = s.toCharArray();
            Arrays.sort(ch);
            String sorted = new String(ch);
            if(!smp.containsKey(sorted)){
                smp.put(sorted, new ArrayList<>());
            }
            smp.get(sorted).add(s);
        }

        return new ArrayList<>(smp.values());
    }
}
