import { Text } from '@chakra-ui/react';
import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('src/screens/Home'));
const NotFound = lazy(() => import('src/screens/NotFound'));
const DesignComponents = lazy(() => import('src/screens/Design'));
const DesignLayout = lazy(() => import('src/screens/Design/layout'));
const ButtonExamples = lazy(() => import('src/screens/Design/components/ButtonExamples'));
const InputExamples = lazy(() => import('src/screens/Design/components/InputExamples'));
const CheckboxExamples = lazy(() => import('src/screens/Design/components/CheckboxExamples'));
const RadioExamples = lazy(() => import('src/screens/Design/components/RadioExamples'));
const SelectExamples = lazy(() => import('src/screens/Design/components/SelectExamples'));
const LinkExamples = lazy(() => import('src/screens/Design/components/LinkExamples'));
const PinInputExamples = lazy(() => import('src/screens/Design/components/PinInputExamples'));
const SwitchExamples = lazy(() => import('src/screens/Design/components/SwitchExamples'));
const TagExamples = lazy(() => import('src/screens/Design/components/TagExamples'));

export default function AppRouter() {
  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/components" element={<DesignLayout />}>
          <Route path="/components/home" index element={<DesignComponents />} />
          <Route path="/components/button" element={<ButtonExamples />} />
          <Route path="/components/input" element={<InputExamples />} />
          <Route path="/components/checkbox" element={<CheckboxExamples />} />
          <Route path="/components/radio" element={<RadioExamples />} />
          <Route path="/components/select" element={<SelectExamples />} />
          <Route path="/components/link" element={<LinkExamples />} />
          <Route path="/components/pin-input" element={<PinInputExamples />} />
          <Route path="/components/switch" element={<SwitchExamples />} />
          <Route path="/components/tags" element={<TagExamples />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
