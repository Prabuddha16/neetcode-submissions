class Solution {
    public int majorityElement(int[] nums) {
        int v = 0, c = 0;
        for(int n: nums){
            if(v == 0){
                c = n;
            }
            v+= (n == c) ? 1 : -1;
        }
        return c;
    }
}