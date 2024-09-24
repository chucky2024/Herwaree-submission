import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useNavigate } from 'react-router-dom';

const ConnectWalletButton = () => {
    const { publicKey } = useWallet();
    const navigate = useNavigate();
    if(publicKey){
      navigate('/herwaree/introduce')
    }


  return (
    <div>
      <WalletMultiButton/>
    </div>
  );
};

export default ConnectWalletButton;