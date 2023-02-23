import React from "react";
import Card from "./Card";

type Props = {};

const MyProposal = (props: Props) => {
  const popularCampaigns = [
    {
      title: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
      walletAdd: "0x854740248ade985d00C15bCdB5f6Cf0a206F3141",
      desc: "We’ll get you directly seated and inside for you to enjoy the show.",
    },
    {
      title: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
      walletAdd: "0x854740248ade985d00C15bCdB5f6Cf0a206F3141",
      desc: "We’ll get you directly seated and inside for you to enjoy the show.",
    },
    {
      title: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
      walletAdd: "0x854740248ade985d00C15bCdB5f6Cf0a206F3141",
      desc: "We’ll get you directly seated and inside for you to enjoy the show.",
    },
    {
      title: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
      walletAdd: "0x854740248ade985d00C15bCdB5f6Cf0a206F3141",
      desc: "We’ll get you directly seated and inside for you to enjoy the show.",
    },
  ];
  return (
    <div className="flex items-center max-w-7xl mx-auto py-4 md:px-0 md:py-[3rem]">
      <div className="flex items-center flex-col w-full">
        <div className="flex items-center justify-between px-[16px] md:px-[60px] w-full">
          <h2 className="text-greenSec text-[32px] md:text-[45px] font-b-600">
            Your Proposals
          </h2>
          <span className="text-blackPrim">See All</span>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="flex items-center py-[2rem] md:py-[3rem] w-[100%] flex-wrap justify-between md:px-[2rem] gap-4">
            {popularCampaigns.map((campaign, index) => (
              <div key={index}>
                <Card
                  title={campaign.title}
                  walletAdd={campaign.walletAdd}
                  description={campaign.desc}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProposal;
