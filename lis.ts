class Lis
{
    private longestSubsequence:number[];

    private data:number[];

    private n:number;

    private max:number;

    /**
     * ith index of the array contains the index second last element of the longest increasing sub-sequence that ends at ith index 
     */
    private posArr:number[];

    /**
     * Index at which the longest increasing subsequence ends
     */
    private pos:number;

    constructor(data:number[]){
        if(! (this.n = data.length) ){
            throw "Array Must have an element";
        }

        this.data = data;
        this.max=0;
        this.pos = -1;
        this.longestSubsequence = Array(this.n).fill(1);
        this.posArr = Array(this.n).fill(-1);
        this.computeLength();
    }

    private computeLength():void{
        for(let i=0; i<this.n; i++){
            for(let j=0; j<i; j++){
                if(this.data[j]<this.data[i] && this.longestSubsequence[i] < this.longestSubsequence[j]+1){
                    this.longestSubsequence[i]=this.longestSubsequence[j]+1;
                    this.posArr[i] = j; // as i != j, those positions of the array have -1 as value
                }
            }
        }
    }

    public getLongestSubsequence():number{
        if(this.max === 0){
            this.maxOfLongestSubsequenceArray();
        }
        return this.max;
    }

    private maxOfLongestSubsequenceArray()
    {
        this.max = 1;
        for(let i=0; i<this.n; i++){
            if(this.max < this.longestSubsequence[i]){
                this.max = this.longestSubsequence[i];
                this.pos = i;
            }
        }
    }

    public getLongestIncreasingSubsequence()
    {
        if(this.max === 0){
            this.maxOfLongestSubsequenceArray();
        }
        let lis = "";
        while(this.pos != -1){ // at the index of the first item of the LIS the value of the posArr is -1
            lis += data[this.pos];
            this.pos = this.posArr[this.pos];
        }
        return lis;
    }
}

const data = [10,9,1,2,3];


const lis = new Lis(data);
const ans = lis.getLongestSubsequence();

console.log("Longest Subsequence is : "+ans);


console.log(lis.getLongestIncreasingSubsequence());

