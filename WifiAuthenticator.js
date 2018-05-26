pragma solidity ^0.4.0;

contract WifiAuthenticator {
    string networkname = "Hello HelloWorld";
    
    struct user {
        address username;
        string key;
    }
    
    mapping(address => user) users;
    uint8 numberOfUsers;
    uint8 currentUsers;
    
     function WifiAuthenticator(string mesage,uint8 _numusers) public {
        networkname = mesage;
        numberOfUsers = _numusers;
        currentUsers = 0;
    }
    
     function getnetworkName() public view returns (string) {
         return networkname;
     }
     
     /// Give $(_newuser) the right to vote on this ballot.
    /// May only be called by $(chairperson).
    function addUser(address _newuser) public {
        if (currentUsers > numberOfUsers) return;
        users[_newuser].username = _newuser;
        users[_newuser].key = "admin123";
        currentUsers = currentUsers+1;
    }
     
     function getUserCredentials(address _usercredentials) public view returns (string) {
         return users[_usercredentials].key;
     }
     function compareStrings (string a, string b) view returns (bool){
       return keccak256(a) == keccak256(b);
   }
     
     function ValidateUser(address _usercredentials,string _key) public view returns (string) {
         if (compareStrings( users[_usercredentials].key, _key) ) {
             return  "Successfully logged in ";
         }else{
             return "Either user name or password is wrong";
         }
         
         return "Edge case handling";
     }
     
     function getNumberOfUsers() public view returns (uint8){
         return numberOfUsers;
     }
}