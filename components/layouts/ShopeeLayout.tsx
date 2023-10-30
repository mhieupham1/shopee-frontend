import Header from "../header";
import Footer from "../footer";

export default function ShopeeLayout({ children }) {
    return (
        <>
            <Header />
              <main>{children}</main>
            <Footer />
        </>
    )
}