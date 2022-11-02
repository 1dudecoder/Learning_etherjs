// SPDX-License-Identifier: GPL-3.0
pragma solidity >= 0.7.0 < 0.8.0;

contract token_name{

    string public name = "nitin_token";
    uint total_number = 1000;
    string smb = "NTT";
    address owner;
    uint ownerbalance = 0;


    event myeve(address indexed to, uint indexed amount);

    constructor() {
        owner = msg.sender;
        ownerbalance = total_number;
    }

    function tellowner() public view returns(address){
        return owner;
    }

    function tellsymbol() public view returns(string memory){
        return smb;
    }

    function tellbalance() public view returns(uint){
        return total_number;
    }

    function sendtrans(address payable _to) public payable {
        _to.transfer(msg.value);
        emit myeve(_to,msg.value);
    }

}