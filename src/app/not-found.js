import styles from '@/app/styles/common.module.css'
import Link from "next/link";

const NotFound = () => {
    return (<>
            <h1>404</h1>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/">
                <button>
                    Go to Home Page
                </button>
            </Link>
        </>);
}

export default NotFound;