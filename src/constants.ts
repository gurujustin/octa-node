export const EPOCH_INTERVAL = 9600;

// NOTE could get this from an outside source since it changes slightly over time
export const BLOCK_RATE_SECONDS = 3;

interface IAddresses {
  [key: number]: { [key: string]: string };
}
export const addresses: IAddresses = {
  56: {
    BUSD_ADDRESS: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
    TOKEN_ADDRESS: "0xf34c9cc7387408ae00ab4ee8a7f8a39bc260ba14",
    PRESALE_ADDRESS: "0x99d6Ef8A48AA752Bb1C2F664D9745D370e14B129",
  },
};
