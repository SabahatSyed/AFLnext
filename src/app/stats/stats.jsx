import React from "react";
export default async function Stats({ data }) {
  console.log(data.data);
//   console.log(data.data.attributes.icon.data[0].attributes.url);
  return (
    <div>
      <div className=" uppercase font-magistraal text-4xl text-headingblue dark:text-white md:m-12 p-6 m-5 text-center">
        Team Stats
      </div>
      <div className="p-4">
        <table className="min-w-full divide-y divide-gray-200 overflow-x-scroll">
        
            
          <thead className="h-12">
            <tr className="border-b border-headingblue">
              <th className="col-span-4">Teams</th>
              <th className="border-l-4 border-headingblue border-t ">Att</th>
              <th className="border-t border-headingblue">Cmp</th>
              <th className="border-t border-headingblue">Cmp %</th>
              <th className="border-r border-headingblue border-t">YdsAtt</th>
              <th className="border-t border-headingblue">PassYds</th>
              <th className="border-t border-headingblue">TD</th>
              <th className="border-r border-headingblue border-t">INT</th>
              <th className="border-t border-headingblue">Rate</th>
              <th className="border-r border-headingblue border-t">1st</th>
              <th className="border-t border-headingblue">1st %</th>
              <th className="border-r border-headingblue border-t">20+</th>
              
              <th className="border-t border-headingblue">40+</th>
              <th className="border-r border-headingblue border-t">Lng</th>
              
              <th className="border-t border-r border-headingblue">Sck</th>
              <th className="border-r-4 border-headingblue border-t">SckY</th>
            </tr>
          </thead>
          {data.data.map((result, index) => (
          <tbody key={index} className="text-center">
            <tr className="h-12 border border-headingblue">
            {/* <img
                src={`http://afl-cms.logixsy.com${result.attributes.Image.data[0].attributes.url}`}
                alt="athletic gaines"
              /> */}
              <td className={`${result.attributes.Team === 'Billing Outlaws'? 'border-l-8 border-l-headingblue' : 'border-l-8 border-l-red-700'}`}>{result.attributes.Team}</td>
              <td className="border-l-4 border-headingblue">{result.attributes.Att}</td>
              <td>{result.attributes.Cmp}</td>
              <td>{result.attributes.CmpPer}</td>
              <td className="border-r border-headingblue">{result.attributes.YdsAtt}</td>
              <td >{result.attributes.PassYds}</td>
              <td>{result.attributes.TD}</td>
              <td className="border-r border-headingblue">{result.attributes.INT}</td>
              <td>{result.attributes.Rate}</td>
              <td className="border-r border-headingblue">{result.attributes.first}</td>
              <td>{result.attributes.firstPer}</td>
              <td className="border-r border-headingblue">{result.attributes.twentyPlus}</td>
              <td>{result.attributes.fortyPlus}</td>
              <td className="border-r border-headingblue">{result.attributes.Lng}</td>
              <td className="border-r border-headingblue">{result.attributes.Sck}</td>
              <td className="border-r-4 border-headingblue ">{result.attributes.SckY}</td>
            </tr>
          </tbody>
          
        ))}
        </table>
      </div>
    </div>
  );
}
