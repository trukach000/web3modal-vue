const ConnectToMetamask = async () => {
    let provider = null;
    if (typeof window.ethereum !== 'undefined') {
        if ( window.ethereum.providers && window.ethereum.providers.length > 0){
          provider = window.ethereum.providers.find((provider) => provider.isMetaMask);
        } else {
          throw new Error("No metamask provider found");
        }
        try {
            await provider.request({method: 'eth_requestAccounts'})
        } catch (error) {
            throw new Error("User Rejected");
        }
    } else if (window.web3) {
        provider = window.web3.currentProvider;
    } else {
        throw new Error("No Web3 Provider found");
    }
    return provider;
};

export default ConnectToMetamask;
