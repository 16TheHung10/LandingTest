import React, { forwardRef, useRef, useState } from "react";
import { TableWrapper } from "./styled";

function Table() {
  return (
    <TableWrapper className="table">
      <div className="content">
        <table className="content_table">
          <tr>
            <th className="tier content_p p_blue">Tier</th>
            <th className="include content_p p_blue">
              Free phone <br /> include
            </th>
            <th className="discount content_p p_blue">NFT Discount Rate</th>
            <th className="sale content_p p_blue">Phone Sale Reward</th>
            <th className="app_store content_p p_blue">
              App Store Revenue <br /> Reward
            </th>
            <th className="purchase content_p p_blue">
              Phone Purchase <br /> Referral Reward
            </th>
          </tr>

          <tr>
            <td className="tier content_p">Tier 1</td>
            <td className="include content_p">1 phone</td>
            <td className="discount content_p">
              10% <br /> $ 450
            </td>
            <td className="sale content_p">
              1 % of total sales <br /> (NFT Level Group 1/n)
            </td>
            <td className="app_store content_p">
              14% of total store sales <br /> 10% (NFT Level Group 1/n)
            </td>
            <td className="purchase content_p">5% of total referral purchases</td>
          </tr>

          <tr>
            <td className="tier content_p"> Tier 2</td>
            <td className="include content_p">1 phone</td>
            <td className="discount content_p">
              20% <br /> $ 400
            </td>
            <td className="sale content_p">
              2 % of total sales <br /> (NFT Level Group 2/n)
            </td>
            <td className="app_store content_p">
              14% of total store sales <br /> 15% (NFT Level Group 1/n)
            </td>
            <td className="purchase content_p">7% of total referral purchases</td>
          </tr>

          <tr>
            <td className="tier content_p"> Tier 3</td>
            <td className="include content_p">1 phone</td>
            <td className="discount content_p">
              30% <br /> $ 350
            </td>
            <td className="sale content_p">
              3 % of total sales <br /> (NFT Level Group 3/n)
            </td>
            <td className="app_store content_p">
              14% of total store sales <br /> 20% (NFT Level Group 1/n)
            </td>
            <td className="purchase content_p">10% of total referral purchases</td>
          </tr>

          <tr>
            <td className="tier content_p"> Tier 4</td>
            <td className="include content_p">1 phone</td>
            <td className="discount content_p">
              40% <br /> $ 300
            </td>
            <td className="sale content_p">
              4 % of total sales <br /> (NFT Level Group 4/n)
            </td>
            <td className="app_store content_p">
              14% of total store sales <br /> 25% (NFT Level Group 1/n)
            </td>
            <td className="purchase content_p">12% of total referral purchases</td>
          </tr>

          <tr>
            <td className="tier content_p"> Tier 5</td>
            <td className="include content_p">1 phone</td>
            <td className="discount content_p">
              50% <br /> $ 250
            </td>
            <td className="sale content_p">
              5 % of total sales <br /> (NFT Level Group 5/n)
            </td>
            <td className="app_store content_p">
              14% of total store sales <br /> 30% (NFT Level Group 1/n)
            </td>
            <td className="purchase content_p">15% of total referral purchases</td>
          </tr>
        </table>
      </div>
    </TableWrapper>
  );
}
export default forwardRef(Table);
