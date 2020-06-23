import React from 'react';
import FeatureItems from './FeatureItems';


/*FEATURES COMPONENT CONTAINS FEATUREITEMS*/
function Features(props) {

  return Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;

    return (
      <fieldset className="feature" key={featureHash}>

        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>

        <FeatureItems 
          feature={feature} 
          format={props.format} 
          options={props.features[feature]} 
          selected={props.selected} 
          updateFeature={props.updateFeature} 
        />

      </fieldset>
    );
  });
};

export default Features;