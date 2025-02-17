import { useCallback } from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';

type ConnectAccountReact = {
  children?: React.ReactNode;
};

/**
 * ConnectAccount
 *  - Connects to the wallet
 *  - Disconnects from the wallet
 *  - Displays the wallet network
 */
export function ConnectAccount({ children }: ConnectAccountReact) {
  const { address, status } = useAccount();
  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();
  const connector = connectors[0];

  const handleDisconnectWallet = useCallback(() => {
    disconnect({ connector });
  }, [disconnect]);

  const ConnectedChildren = () => {
    if (children) {
      return children;
    }
    return <div onClick={handleDisconnectWallet}>Connected wallet: {address}</div>;
  };

  return (
    <div className="flex flex-grow" data-testid="ockConnectAccountButton">
      {(() => {
        if (status === 'disconnected' || status === 'connecting') {
          return (
            <button
              onClick={() => connect({ connector })}
              type="button"
              style={{
                display: 'inline-flex',
                paddingTop: '0.5rem',
                paddingBottom: '0.5rem',
                paddingLeft: '1rem',
                paddingRight: '1rem',
                flexGrow: '1',
                gap: '0.5rem',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '1.5rem',
                height: '2.5rem',
                backgroundColor: '#ffffff',
              }}
            >
              <div
                data-testid="ockConnectAccountButtonInner"
                style={{
                  fontSize: '0.875rem',
                  lineHeight: '1.25rem',
                  fontWeight: '500',
                  color: '#000000',
                }}
              >
                Connect wallet
              </div>
            </button>
          );
        }

        return <ConnectedChildren />;
      })()}
    </div>
  );
}
