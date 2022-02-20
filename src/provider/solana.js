export const getProvider = () => {
  if (window?.solana?.isPhantom) return window.solana;

  window.open('https://phantom.app/', '_blank');
};
