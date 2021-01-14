import Web3 from "web3"

let contract
const callWeb3=async ()=>{
if (window.ethereum) {
    window.web3 = new Web3(window.ethereum)
    await window.ethereum.enable()
    window.ethereum.autoRefreshOnNetworkChange = false;
}
else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider)
    window.ethereum.autoRefreshOnNetworkChange = false;
}
else {
    window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
}
const abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "store",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "retreive",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const contractAddress = "0x342104442824f1872d3688f2c9a44c5ce189a505";
 contract = new window.web3.eth.Contract(abi, contractAddress);
console.log(contract.methods)

// contract.methods.store(20).send({from:"0xFAFe4241aF32e658a33394de240601BCAf39bfF0"});


// contract.methods.retreive().call().then(res=>console.log(res))
}

const store = async(val)=>{
    await callWeb3()
    await contract.methods.store(val).send({from:"0xFAFe4241aF32e658a33394de240601BCAf39bfF0"});
}
const retreive= async()=>{
    await callWeb3()
   const res= await contract.methods.retreive().call()
   return res;
}


export {store, retreive}