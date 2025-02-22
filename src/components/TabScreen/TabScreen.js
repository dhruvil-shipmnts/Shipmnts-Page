import React from 'react';
import { Teams, WhiteCircles } from '../../assets';
import { TAB_ITEMS } from './exports';

export default function TabScreen() {
  const SegmentLabels = TAB_ITEMS.map((item) => item.label);
  const [activeTab, setActiveTab] = React.useState(SegmentLabels[0]);
  return (
    <section
      className="screenshot-screen-container"
      style={{
        backgroundColor: '#ffffff',
      }}
      id="ai_driven_apps"
    >
      <div className="title-container-screenshot">
        {<img className="title-image" src={Teams} alt="Upper"></img>}
        <h6 className="screenshot-screen-title section-title" style={{ color: '#000000' }}>
          {'AI-Driven Apps for More Efficient Teams'}
        </h6>
        {<img className="title-image" src={WhiteCircles} alt="Lower"></img>}
      </div>
      <div className="tab-container">
        <div className="segment-container">
          {SegmentLabels.map((label) => {
            return (
              <button
                className="segment-button"
                onClick={() => {
                  setActiveTab(label);
                }}
                style={
                  label !== activeTab
                    ? {
                        background: 'transparent',
                      }
                    : { background: 'white' }
                }
                wave={false}
              >
                {label}
              </button>
            );
          })}
        </div>
        {TAB_ITEMS.find((item) => item.label === activeTab).content}
      </div>
    </section>
  );
}
