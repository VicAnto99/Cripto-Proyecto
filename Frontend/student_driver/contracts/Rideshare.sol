// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
// pragma solidity ^0.5.16;

contract RideShare {
  address[16] public users;

  function acceptBid(uint userID) public returns (uint){
    require(userID >= 0 && userID <= 15);
    
    users[userID] = msg.sender;

    return userID;
  }
  
  // Retrieve the users :
  function getUsers() public view returns (address[16] memory) {
    return users;
  }

  // Make a bid
  function makeBid(uint userID, uint amount) public payable returns (uint){
    require(userID >= 0 && userID <= 15);
    require(amount > 0);
    require(msg.value >= amount);

    users[userID] = msg.sender;

    return userID;
  }


}
