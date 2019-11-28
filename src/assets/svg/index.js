import Vue from 'vue';
import SfIcon from '../../components/basic/icon/icon';

Vue.component('sf-icon', SfIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context("./", false, /\.svg$/)
requireAll(req)