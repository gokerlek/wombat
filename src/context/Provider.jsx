/**
 * @summary Providers is a collection of providers that are used to provide context to the application.
 * @param {object} children - children of the component
 * @returns {object} - context providers
 * @example
 * <Providers>
 *  <Component />
 * </Providers>
 */

import { GeneralProvider } from "./GeneralProvider.jsx";
import { ErrorProvider } from "./ErrorProvider.jsx";

const Provider = ({ children }) => {
  const components = [GeneralProvider, ErrorProvider];

  return (
    <>
      {components.reduceRight((acc, Component) => {
        return <Component>{acc}</Component>;
      }, children)}
    </>
  );
};

export default Provider;
