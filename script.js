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
  // Add more NFTs by following the same structure
];

async function fetchNFT(contractAddress, tokenId) {
    const response = await fetch(`https://api.opensea.io/api/v1/asset/${contractAddress}/${tokenId}`);
    const data = await response.json();
    return data;
  }
  
  function createMediaElement(nft) {
    let mediaElement;
  
    if (nft.animation_url) {
      mediaElement = document.createElement('video');
      mediaElement.src = nft.animation_url;
      mediaElement.autoplay = true;
      mediaElement.loop = true;
      mediaElement.muted = true;
      mediaElement.playsInline = true;
    } else {
      mediaElement = document.createElement('img');
      mediaElement.src = nft.image_url;
    }
  
    mediaElement.alt = nft.name;
    return mediaElement;
  }
  
  function createNFTElement(nft) {
    const nftElement = document.createElement('div');
    nftElement.className = 'nft';
  
    const mediaElement = createMediaElement(nft);
  
    nftElement.appendChild(mediaElement);
    nftElement.innerHTML += `
      <h3>${nft.name}</h3>
    `;
  
    return nftElement;
  }
  
  async function displayNFTs() {
    for (const nftItem of nftList) {
      const nft = await fetchNFT(nftItem.contractAddress, nftItem.tokenId);
      const nftElement = createNFTElement(nft);
      gallery.appendChild(nftElement);
    }
  }
  
  displayNFTs();