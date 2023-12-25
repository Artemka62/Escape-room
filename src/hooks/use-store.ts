import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {State, AppDispatch} from '../store/type-store';

const useAppSelector: TypedUseSelectorHook<State> = useSelector;
const useAppDispatch = useDispatch<AppDispatch>;

export {useAppSelector, useAppDispatch};
