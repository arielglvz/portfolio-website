// craco.config.js
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const svgRule = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      };
      
      // Find the existing rule that handles svg
      const existingSvgRuleIndex = webpackConfig.module.rules.findIndex(
        (rule) => rule.test && rule.test.toString().includes('svg')
      );

      // Replace existing rule with the new one
      if (existingSvgRuleIndex !== -1) {
        webpackConfig.module.rules[existingSvgRuleIndex] = svgRule;
      } else {
        webpackConfig.module.rules.push(svgRule);
      }

      return webpackConfig;
    },
  },
};
