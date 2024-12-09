
export interface FeatureFlags {
  enableTaxConfiguration: boolean;
}

export const getFeatureFlags = (): FeatureFlags => {
  const isProd = process.env.NODE_ENV === 'production';
  
  return {
    enableTaxConfiguration: !isProd
  };
};