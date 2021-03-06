// 路由入口文件
import Layout from '../layout/index'
import Home from './Home/'
// import DatePicker from '../containers/DataEntry/DatePickerPage'
// import Picker from '../containers/DataEntry/PickerPage'
// import PickerView from '../containers/DataEntry/PickerViewPage'
// import Uploader from '../containers/DataEntry/UploaderPage'
// import Input from '../containers/Form/InputPage'
// import TextArea from '../containers/Form/TextAreaPage'
// import Number from '../containers/Form/NumberPage'
// import FormSwitch from '../containers/Form/SwitchPage'
// import Select from '../containers/Form/SelectPage'
// import DateRange from '../containers/Form/DateRangePage'
// import DateTime from '../containers/Form/DateTimePage'
// import Checkbox from '../containers/Form/CheckboxPage'
// import Form from '../containers/Form/FormPage'
// import List from '../containers/DataDisplay/ListPage'
// import Carousel from '../containers/DataDisplay/CarouselPage'
// import ToastPage from '../containers/Feedback/ToastPage'
// import TagPage from '../containers/DataDisplay/TagPage'
// import PopoverPage from '../containers/Feedback/PopoverPage'

export const createRoutes = () => ({
    path: '/',
    component: Layout,
    indexRoute: { component: Home },
    getChildRoutes(location, callback) {
        require.ensure([], function (require) {
            callback(null, [
                require('./DataDisplay').default(),
                require('./DataEntry').default(),
                require('./Feedback').default(),
            ])
        })
    }
    // childRoutes: [
    //     {path: 'index', component: Home},
    //     {path: '/data-entry', childRoutes: [
    //         {path: 'button', component: Button},
    //         {path: 'switch', component: Switch},
    //         {path: 'date-picker', component: DatePicker},
    //         {path: 'picker', component: Picker},
    //         {path: 'picker-view', component: PickerView},
    //         {path: 'uploader', component: Uploader},
    //     ]},
    //     {path: '/data-display', childRoutes: [
    //         {path: 'list', component: List},
    //         {path: 'carousel', component: Carousel},
    //         {path: 'Tag', component: TagPage},
    //     ]},
    //     {path: '/form', childRoutes: [
    //         {path: 'input', component: Input},
    //         {path: 'textarea', component: TextArea},
    //         {path: 'number', component: Number},
    //         {path: 'switch', component: FormSwitch},
    //         {path: 'select', component: Select},
    //         {path: 'date-range', component: DateRange},
    //         {path: 'date-time', component: DateTime},
    //         {path: 'checkbox', component: Checkbox},
    //         {path: 'form', component: Form},
    //     ]},
    //     {path: '/feedback', childRoutes: [
    //         {path: 'list', component: ToastPage},
    //         {path: 'popover', component: PopoverPage},
    //     ]}
    // ]
});

export default createRoutes