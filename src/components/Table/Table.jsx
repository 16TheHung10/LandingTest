import React, { forwardRef, useRef, useState } from "react";
import { TableWrapper } from "./styled";

function Table() {
  return (
    <TableWrapper className="table">
      <div className="content">
        <table className="content_table">
          <tr>
            <th className="tier">Tier</th>
            <th className="include">
              Free phone <br /> include
            </th>
            <th className="discount">NFT Discount Rate</th>
            <th className="sale">Phone Sale Reward</th>
            <th className="app_store">
              App Store Revenue <br /> Reward
            </th>
            <th className="purchase">
              Phone Purchase <br /> Referral Reward
            </th>
          </tr>

          <tr>
            <td className="tier">Tier 1</td>
            <td className="include">1 phone</td>
            <td className="discount">
              10% <br /> $ 450
            </td>
            <td className="sale">
              1 % of total sales <br /> (NFT Level Group 1/n)
            </td>
            <td className="app_store">
              14% of total store sales <br /> 10% (NFT Level Group 1/n)
            </td>
            <td className="purchase">5% of total referral purchases</td>
          </tr>

          <tr>
            <td className="tier"> Tier 2</td>
            <td className="include">1 phone</td>
            <td className="discount">
              20% <br /> $ 400
            </td>
            <td className="sale">
              2 % of total sales <br /> (NFT Level Group 2/n)
            </td>
            <td className="app_store">
              14% of total store sales <br /> 15% (NFT Level Group 1/n)
            </td>
            <td className="purchase">7% of total referral purchases</td>
          </tr>

          <tr>
            <td className="tier"> Tier 3</td>
            <td className="include">1 phone</td>
            <td className="discount">
              30% <br /> $ 350
            </td>
            <td className="sale">
              3 % of total sales <br /> (NFT Level Group 3/n)
            </td>
            <td className="app_store">
              14% of total store sales <br /> 20% (NFT Level Group 1/n)
            </td>
            <td className="purchase">10% of total referral purchases</td>
          </tr>

          <tr>
            <td className="tier"> Tier 4</td>
            <td className="include">1 phone</td>
            <td className="discount">
              40% <br /> $ 300
            </td>
            <td className="sale">
              4 % of total sales <br /> (NFT Level Group 4/n)
            </td>
            <td className="app_store">
              14% of total store sales <br /> 25% (NFT Level Group 1/n)
            </td>
            <td className="purchase">12% of total referral purchases</td>
          </tr>

          <tr>
            <td className="tier"> Tier 5</td>
            <td className="include">1 phone</td>
            <td className="discount">
              50% <br /> $ 250
            </td>
            <td className="sale">
              5 % of total sales <br /> (NFT Level Group 5/n)
            </td>
            <td className="app_store">
              14% of total store sales <br /> 30% (NFT Level Group 1/n)
            </td>
            <td className="purchase">15% of total referral purchases</td>
          </tr>
        </table>
      </div>
    </TableWrapper>
  );
}
export default forwardRef(Table);
