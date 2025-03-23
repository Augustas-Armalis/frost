import ConnectButton from "../buttons/ConnectButton.jsx";

const ConnectCheckBoxes = () => {
  return (
    <div className="flex w-full gap-4 flex-clip max-[878px]:flex-col">
      <ConnectButton
        icon="src/assets/images/icons/google.png"
        activeIcon="src/assets/images/icons/discord.png"
        title="Email"
      />
      <ConnectButton
        icon="src/assets/images/icons/discord.png"
        activeIcon="src/assets/images/icons/discord.png"
        title="Discord"
      />
    </div>
  );
};

export default ConnectCheckBoxes;
