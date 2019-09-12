import React from 'react';

import FormTemplate from 'custom_modules/templates/FormTemplate';

import { PresentationSection, FormSection } from './sections';

function SignInPage() {
  return (
    <FormTemplate presentation={PresentationSection}>
      <FormSection />
    </FormTemplate>
  );
}

export default SignInPage;
