import { useEffect } from "react";
import SearchResult from "./SearchResult.jsx";

export default function SearchResults(results) {
  var resultList = [];
  results["results"].map((data) => {
    resultList.push(data);
  });
  console.log(resultList);

  return (
    <div className="relative top-1 z-50 m-5 flex h-[350px] w-full flex-col gap-y-5 rounded-3xl bg-black/20 p-5">
      <div className="relative top-2 h-full w-full">
        {resultList.map((data) => {
          return (
            <SearchResult
              title={data.title}
              imageURL={data.imgURL}
              price={data.price}
            />
          );
        })}
      </div>
    </div>
  );
}
