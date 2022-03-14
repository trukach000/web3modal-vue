const ConnectToCoinbaseWalletSdk = (
  CoinbaseWalletSdk,
  opts
) => {
  return new Promise(async (resolve, reject) => {
    const options = opts || {};
    const infuraId = options.infuraId || "";
    const chainId = options.chainId || 1;
    const appName = options.appName || "";
    const appLogoUrl = options.appLogoUrl;
    const darkMode = options.darkMode || false;

    let rpc = options.rpc || undefined;
    if (options.infuraId && !options.rpc) {
      rpc = `https://mainnet.infura.io/v3/${infuraId}`;
    }

    const coinbaseWalletSdk = new CoinbaseWalletSdk({
      appName,
      appLogoUrl,
      darkMode
    });

    try {
      const provider = coinbaseWalletSdk.makeWeb3Provider(rpc, chainId);
      await provider.send("eth_requestAccounts");
      resolve(provider);
    } catch (e) {
      reject(e);
    }
  });
};

export default ConnectToCoinbaseWalletSdk;