import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Customers",
}

const Costumers = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000));

    return <h1>El Contenido de Costumers</h1>


}
export default Costumers
