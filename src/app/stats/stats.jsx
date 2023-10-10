import React from "react";
export default async function Stats({ data }) {
  // console.log(data.data[1].attributes.icon.data.attributes.url);
  // console.log(data.data);

  return (
    <div>
      <div className=" uppercase font-magistraal text-4xl text-headingblue dark:text-white md:m-12 p-6 m-5 text-center">
        Team Stats
      </div>
      <div className="p-4 ">
        <div className="flex justify-center items-center">
      <div className="w-full  overflow-x-scroll custom-scrollbar">
          <table className="min-w-full divide-y divide-gray-200 font-roboto">
            <thead className="">
              <tr className="border-b border-headingblue">
                <th className="col-span-4 text-base">Teams</th>
                <th className="border-l-4 border-headingblue border-t min-w-[4rem] md:min-w-[5rem] text-xs">Att</th>
                <th className="border-t border-headingblue min-w-[4rem] md:min-w-[5rem] text-xs">Cmp</th>
                <th className="border-t border-headingblue min-w-[4rem] md:min-w-[5rem] text-xs">Cmp %</th>
                <th className="border-r border-headingblue border-t min-w-[4rem] md:min-w-[5rem] text-xs">YdsAtt</th>
                <th className="border-t border-headingblue min-w-[4rem] md:min-w-[5rem] text-xs">PassYds</th>
                <th className="border-t border-headingblue min-w-[4rem] md:min-w-[5rem] text-xs">TD</th>
                <th className="border-r border-headingblue border-t min-w-[4rem] md:min-w-[5rem] text-xs">INT</th>
                <th className="border-t border-headingblue min-w-[4rem] md:min-w-[5rem] text-xs">Rate</th>
                <th className="border-r border-headingblue border-t min-w-[4rem] md:min-w-[5rem] text-xs">1st</th>
                <th className="border-t border-headingblue min-w-[4rem] md:min-w-[5rem] text-xs">1st %</th>
                <th className="border-r border-headingblue border-t min-w-[4rem] md:min-w-[5rem] text-xs">20+</th>

                <th className="border-t border-headingblue min-w-[4rem] md:min-w-[5rem] text-xs">40+</th>
                <th className="border-r border-headingblue border-t min-w-[4rem] md:min-w-[5rem] text-xs">Lng</th>

                <th className="border-t border-r border-headingblue min-w-[4rem] md:min-w-[5rem] text-xs">Sck</th>
                <th className="border-r-4 border-headingblue border-t min-w-[4rem] md:min-w-[5rem] text-xs">SckY</th>
              </tr>
            </thead>
            {data.data.map((result, index) => (
              <tbody key={index} className="text-center text-xs">
                <tr className="h-12 border border-headingblue ">
                  {/* <img
                src={`http://afl-cms.logixsy.com${result.attributes.Image.data[0].attributes.url}`}
                alt="athletic gaines"
              /> */}
                  <td
                  style={{borderLeftColor:`${result.attributes.svgColor.replace(/\s/g, "")}`,borderLeftWidth:5}}
                    className={`font-semibold flex items-center  w-48 lg:min-w-fit `}
                  >
  

                    <img src={`http://afl-cms.logixsy.com${result.attributes.icon.data.attributes.url}`} alt="outLaws"  className="w-10 h-10 m-2"/>
                    {result.attributes.Team}
                  </td>
                  <td className="border-l-4 border-headingblue">
                    {result.attributes.Att}
                  </td>
                  <td>{result.attributes.Cmp}</td>
                  <td>{result.attributes.CmpPer}</td>
                  <td className="border-r border-headingblue">
                    {result.attributes.YdsAtt}
                  </td>
                  <td>{result.attributes.PassYds}</td>
                  <td>{result.attributes.TD}</td>
                  <td className="border-r border-headingblue">
                    {result.attributes.INT}
                  </td>
                  <td>{result.attributes.Rate}</td>
                  <td className="border-r border-headingblue">
                    {result.attributes.first}
                  </td>
                  <td>{result.attributes.firstPer}</td>
                  <td className="border-r border-headingblue">
                    {result.attributes.twentyPlus}
                  </td>
                  <td>{result.attributes.fortyPlus}</td>
                  <td className="border-r border-headingblue">
                    {result.attributes.Lng}
                  </td>
                  <td className="border-r border-headingblue">
                    {result.attributes.Sck}
                  </td>
                  <td className="border-r-4 border-headingblue ">
                    {result.attributes.SckY}
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        </div>
      </div>
    </div>
  );
}
