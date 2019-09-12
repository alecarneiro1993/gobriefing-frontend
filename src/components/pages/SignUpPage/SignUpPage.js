import React from 'react';

import FormTemplate from 'custom_modules/templates/FormTemplate';

import { PresentationSection, FormSection } from './sections';

function SignUpPage() {
  return (
    <FormTemplate presentation={PresentationSection}>
      <FormSection />
    </FormTemplate>
  );
}

export default SignUpPage;
