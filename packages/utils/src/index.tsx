import isBrowser from './isBrowser';
import isImg from './isImg';
import isUrl from './isUrl';
import isNil from './isNil';
import isDropdownValueType from './isDropdownValueType';
import omitUndefined from './omitUndefined';
import omitBoolean from './omitBoolean';
import omitUndefinedAndEmptyArr from './omitUndefinedAndEmptyArr';
import useMountMergeState from './useMountMergeState';

/** Hooks */
import useDebounceFn from './hooks/useDebounceFn';
import usePrevious from './hooks/usePrevious';
import conversionMomentValue, { dateFormatterMap } from './conversionMomentValue';
import transformKeySubmitValue from './transformKeySubmitValue';
import parseValueToMoment from './parseValueToMoment';
import useDeepCompareEffect from './hooks/useDeepCompareEffect';
import useDocumentTitle from './hooks/useDocumentTitle';
import type { ProRequestData } from './hooks/useFetchData';
import useFetchData from './hooks/useFetchData';

/** Type */
import type {
  ProSchema,
  ProSchemaValueEnumMap,
  ProSchemaValueEnumObj,
  ProSchemaComponentTypes,
  ProCoreActionType,
  SearchTransformKeyFn,
  ProTableEditableFnType,
  ProFieldValueType,
  ProFieldValueEnumType,
  ProFieldRequestData,
  ProFieldValueObjectType,
  ProFieldTextType,
  RequestOptionsType,
  ProFieldProps,
} from './typing';
import { runFunction } from './runFunction';
import type {
  BaseProFieldFC,
  ProFieldFCMode,
  ProFieldFCRenderProps,
  ProRenderFieldPropsType,
} from '@ant-design/pro-provider';
import dateArrayFormatter from './dateArrayFormatter';
import isDeepEqualReact from './isDeepEqualReact';
import { arrayMoveImmutable } from './array-move';

export type {
  RequestOptionsType,
  ProSchema,
  ProCoreActionType,
  ProSchemaComponentTypes,
  ProSchemaValueEnumMap,
  ProSchemaValueEnumObj,
  SearchTransformKeyFn,
  ProTableEditableFnType,
  ProRequestData,
  ProFieldRequestData,
  ProFieldValueType,
  ProRenderFieldPropsType,
  ProFieldFCRenderProps,
  ProFieldFCMode,
  BaseProFieldFC,
  ProFieldTextType,
  ProFieldValueEnumType,
  ProFieldValueObjectType,
  ProFieldProps,
};

export {
  isDeepEqualReact,
  arrayMoveImmutable,
  dateFormatterMap,
  // function
  transformKeySubmitValue,
  conversionMomentValue as conversionSubmitValue,
  conversionMomentValue,
  parseValueToMoment,
  useDocumentTitle,
  isImg,
  omitBoolean,
  isNil,
  isDropdownValueType,
  omitUndefined,
  omitUndefinedAndEmptyArr,
  isUrl,
  isBrowser,
  runFunction,
  dateArrayFormatter,
  // hooks
  useDeepCompareEffect,
  usePrevious,
  useDebounceFn,
  useMountMergeState,
  useFetchData,
};
