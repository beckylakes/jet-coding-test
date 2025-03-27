const NoResults = ({ metaData }) => {
  const { postalCode } = metaData;
  return (
    <div className="flex flex-col items-center justify-center text-center p-10">
      <p className="text-2xl font-bold text-gray-700">
        No restaurants found for: {postalCode}
      </p>
      <p className="mt-2 text-sm text-gray-500">
        Please try a different postcode or search again.
      </p>
    </div>
  );
};

export default NoResults;
