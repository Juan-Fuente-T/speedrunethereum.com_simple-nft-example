import dotenv from "dotenv";
// dotenv.config(); // Carga las variables de entorno de .env
// dotenv.config({ path: "../../../.env.local" });
// dotenv.config({ path: "../env.local" });
dotenv.config();

import { ethers } from "ethers";
console.log("process.env", process.env);
const main = async () => {
  try {
    // Asegúrate de que las variables de entorno están correctamente cargadas
    const rpcUrl = process.env.SEPOLIA_RPC_URL;
    const deployerKey = process.env.DEPLOYER_PUBLIC_KEY;

    console.log("RPC URL:", rpcUrl); // Verifica que la variable esté cargada
    console.log("Deployer Key:", deployerKey); // Verifica que la variable esté cargada

    const provider = new ethers.JsonRpcProvider(rpcUrl);
    const balance = await provider.getBalance(deployerKey);
    console.log("Balance:", ethers.formatEther(balance));
  } catch (error) {
    console.error("Error:", error);
  }
};

main();
