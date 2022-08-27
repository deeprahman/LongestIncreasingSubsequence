<?php
/**
 * Find the longest increasing subsequence with algorithm of O(n^2) complexity
 */

class Lis
{
	private $lengthArray;

	private $dataArray;

	private $n;

	public function __construct(array $data){
		if(!$this->n = sizeof($data)){
			exit("invalid Array Given");
		}
		$this->dataArray = SplFixedArray::fromArray($data);
		$this->lengthArray = new \SplFixedArray($this->n);
		$this->computeLengthArray();
	}
	

	/**
	 * Time complexisty O(n^2) ;  Highst time complexity
	 */
	private function computeLengthArray()
	{
		$this->lengthArray[0] = 1;
		for($i = 0; $i < $this->n; $i++){
			for($j = 0; $j < $i; $j++){
				if($this->dataArray[$j] < $this->dataArray[$i]){
					$this->lengthArray[$i] = max($this->lengthArray[$i], $this->lengthArray[$j] + 1);
				}
			}
		}
	}

	/**
	 * Time complexity O(n)
	 */
	public function getMaxLengthArray(){
		$max = $this->lengthArray[0];
		for($i = 0; $i < $this->n; $i++){
			$max = max($max, $this->lengthArray[$i]);
		}
		return $max;
	}
	

	private function dprint($s){
	
		echo "\n";

		printf("%s",$s);

		echo "\n";
	}
}


$data = [3,2,4];

$lis = new Lis($data);

$ans = $lis->getMaxLengthArray();

printf("\nThe longest increasing subsequesce is: %d\n",$ans);
