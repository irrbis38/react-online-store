export const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a
                        className="grey-text text-lighten-4 right"
                        href="https://github.com/irrbis38/react-online-store"
                    >
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    );
};
