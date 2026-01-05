import UseFetch from ".";

type dataProps = { data: any; error: string | null; loading: boolean };

export default function UseFetchTest() {
  const { data, error, loading }: dataProps = UseFetch(
    "https://dummyjson.com/products"
  );

  return (
    <div>
      <h1>Use Fetch Hook</h1>
      {error ? <div>{error}</div> : null}
      {loading ? <div>Loading, please wait</div> : null}
      {data?.products && data.products.length
        ? data.products.map((product: { id: string; title: string }) => (
            <p key={product.id}>{product.title}</p>
          ))
        : null}
    </div>
  );
}
