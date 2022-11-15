import Layout from "../components/layout";
import Link from "next/link";

export default function Custom404() {
  return (
    <Layout>
      <div className="text-center">
        <h3>
          Esta pagina no existe, vuelve a <Link href={"/"}> Home</Link> para
          seguir navegando
        </h3>
      </div>
    </Layout>
  );
}
