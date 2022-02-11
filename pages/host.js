export default function Index({ host }) {
    console.log(host);
    return (
        <div>
            <h1>test</h1>
        </div>
    );
}

export function getServerSideProps({ req }) {
    console.log(req.headers.host);

    return { props: { host: req.headers.host } };
}