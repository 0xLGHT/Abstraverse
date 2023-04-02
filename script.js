const gallery = document.getElementById('gallery');

const nftList = [
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the first NFT
    tokenId: '1', // Replace with the token ID of the first NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '2', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the first NFT
    tokenId: '3', // Replace with the token ID of the first NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '4', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the first NFT
    tokenId: '5', // Replace with the token ID of the first NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '6', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the first NFT
    tokenId: '7', // Replace with the token ID of the first NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '8', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the first NFT
    tokenId: '9', // Replace with the token ID of the first NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '10', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the first NFT
    tokenId: '11', // Replace with the token ID of the first NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '12', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the first NFT
    tokenId: '13', // Replace with the token ID of the first NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '14', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the first NFT
    tokenId: '15', // Replace with the token ID of the first NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '16', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the first NFT
    tokenId: '17', // Replace with the token ID of the first NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '18', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the first NFT
    tokenId: '19', // Replace with the token ID of the first NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '20', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the first NFT
    tokenId: '21', // Replace with the token ID of the first NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '22', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the first NFT
    tokenId: '23', // Replace with the token ID of the first NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '24', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the first NFT
    tokenId: '25', // Replace with the token ID of the first NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '26', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the first NFT
    tokenId: '27', // Replace with the token ID of the first NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '28', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '29', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '30', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '31', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '32', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '33', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '34', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '35', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '36', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '37', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '38', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '39', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '40', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '41', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '42', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '43', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '44', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '45', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '46', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '47', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '48', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '49', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '50', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '51', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '52', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '53', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '54', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '55', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '56', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '57', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '58', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '59', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '60', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '61', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '62', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '63', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '64', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '65', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '66', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '67', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '68', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '69', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '70', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '71', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '72', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '73', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '74', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '75', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '76', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '77', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '78', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '79', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '80', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '81', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '82', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '83', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '84', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '85', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '86', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '87', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '88', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '89', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '90', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '91', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '92', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '93', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '94', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '95', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '96', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '97', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '98', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '99', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '100', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '101', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '102', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '103', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '104', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '105', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '106', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '107', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '108', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '109', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '110', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '111', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '112', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '113', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '114', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '115', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '116', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '117', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '118', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '119', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '120', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '121', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '122', // Replace with the token ID of the second NFT
  },
  {
    contractAddress: '0x257c0dC5faCb9B7287Ac7a4366D1b095e3481933', // Replace with the contract address of the second NFT
    tokenId: '123', // Replace with the token ID of the second NFT
  },
  // Add more NFTs by following the same structure
];

async function fetchNFT(contractAddress, tokenId) {
    const response = await fetch(`https://api.opensea.io/api/v1/asset/${contractAddress}/${tokenId}`);
    const data = await response.json();
    return data;
  }
  
  function createMediaElement(nft) {
    const mediaElement = document.createElement("img");
    mediaElement.src = nft.image_url;
    mediaElement.alt = nft.name;
    return mediaElement;
  }
  
  function createNFTElement(nft) {
    const nftElement = document.createElement("div");
    nftElement.className = "nft";
  
    const mediaElement = createMediaElement(nft);
  
    mediaElement.addEventListener("click", () => {
      if (mediaElement.tagName === "IMG" && nft.animation_url) {
        const videoElement = document.createElement("video");
        videoElement.src = nft.animation_url;
        videoElement.autoplay = true;
        videoElement.loop = true;
        videoElement.muted = true;
        videoElement.playsInline = true;
        videoElement.addEventListener("click", () => {
          videoElement.pause();
          nftElement.replaceChild(mediaElement, videoElement);
          nftElement.classList.remove("active");
        });
  
        nftElement.replaceChild(videoElement, mediaElement);
        nftElement.classList.add("active");
      }
    });
  
    nftElement.appendChild(mediaElement);
  
    const nftName = document.createElement("h3");
    nftName.textContent = nft.name;
    nftElement.appendChild(nftName);
  
    return nftElement;
  }
  
  

  function setupIntersectionObserver() {
    const videoElements = document.querySelectorAll('video');
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
  
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.play();
        } else {
          entry.target.pause();
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    videoElements.forEach(video => observer.observe(video));
  }
  
  
  async function displayNFTs() {
    for (const nftItem of nftList) {
      const nft = await fetchNFT(nftItem.contractAddress, nftItem.tokenId);
      const nftElement = createNFTElement(nft);
      gallery.appendChild(nftElement);
    }

  setupIntersectionObserver(); // Add this line
  }
  
  displayNFTs();