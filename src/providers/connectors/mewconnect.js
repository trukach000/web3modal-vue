import {getChainId} from "../../helpers";
const ConnectToMewConnect = (
    MewConnectProvider,
    opts
) => {
    return new Promise(async (resolve, reject) => {
        let infuraId = "";
        let rpc = undefined;
        let chainId = 1;
        if (opts) {
            infuraId = opts.infuraId || "";
            rpc = opts.rpc || undefined;
            if (opts.infuraId && !rpc) {
                rpc = `wss://mainnet.infura.io/ws/v3/${infuraId}`
            }
            chainId =
                opts.network && getChainId(opts.network) ? getChainId(opts.network) : 1;
        }
        if (!MewConnectProvider.Provider.isConnected) {
            const mewConnect = new MewConnectProvider.Provider();
            const provider = mewConnect.makeWeb3Provider(chainId, rpc, true)

            mewConnect.on('disconnected', () => {
            })
            try {
                const address = await mewConnect.enable();
                resolve(provider);
            } catch (e) {
                reject(e);
            }
        }

    });
};

export default ConnectToMewConnect;