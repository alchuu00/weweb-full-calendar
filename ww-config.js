export default {
    editor: {
        label: {
            en: 'FullCalendar',
        },
        icon: 'calendar',
        customSettingsPropertiesOrder: [
            'disableInteractions',
            'viewSettingsTitle',
            ['locale', 'timezone', 'defaultView'],
            ['yearView', 'monthView', 'weekView', 'dayView', 'listView'],
            ['allDaySlot', 'timeStart', 'timeEnd'],
            ['hideWeekends', 'startWeekOnSunday', 'hideDaysOfWeek'],
            'eventsTitle',
            [
                'events',
                'eventsIdFormula',
                'eventsTitleFormula',
                'eventsStartFormula',
                'eventsEndFormula',
                'eventsAllDayFormula',
                'eventsBackgroundColorFormula',
                'eventsBorderColorFormula',
                'eventsTextColorFormula',
                'eventsUrlFormula',
                'eventsContentFormula',
                'eventsDataFormula',
                'eventsGroupIdFormula',
                'eventsEventTypeFormula',
                'eventsEventStatusFormula',
            ],
            [
                'buttonTextToday',
                'buttonTextYear',
                'buttonTextMonth',
                'buttonTextWeek',
                'buttonTextDay',
                'buttonTextList',
                'noEventsText',
            ],
        ],
        customStylePropertiesOrder: [
            'generalStyleTitle',
            ['fontFamily', 'fontSize', 'fontWeight', 'nowIndicatorColor'],
            'headerStyleTitle',
            ['showHeader', 'headerBackgroundColor', 'headerTextColor', 'headerHeight'],
            'dayHeaderStyleTitle',
            [
                'dayHeaderBackgroundColor',
                'dayHeaderTextColor',
                'dayHeaderHeight',
                'dayHeaderFontSize',
                'dayHeaderFontWeight',
                'weekendTextColor',
            ],
            'cellStyleTitle',
            ['todayBackgroundColor', 'cellBackgroundColor', 'cellTextColor'],
            ['otherMonthBackgroundColor', 'otherMonthTextColor'],
            'timeGridStyleTitle',
            ['timeGridBackgroundColor'],
            'buttonStyleTitle',
            [
                'buttonBackgroundColor',
                'buttonTextColor',
                'buttonHoverBackgroundColor',
                'buttonHoverTextColor',
                'buttonActiveBackgroundColor',
                'buttonActiveTextColor',
                'buttonBorderRadius',
                'todayButtonBackgroundColor',
                'todayButtonTextColor',
                'todayButtonHoverBackgroundColor',
                'todayButtonHoverTextColor',
            ],
            'borderStyleTitle',
            ['borderColor'],
            'eventStyleTitle',
            ['defaultEventBackgroundColor', 'defaultEventBorderColor', 'defaultEventTextColor'],
        ],
    },
    properties: {
        // Title properties for Settings
        viewSettingsTitle: {
            section: 'settings',
            type: 'Title',
            label: {
                en: 'View Settings',
            },
            editorOnly: true,
        },
        eventsTitle: {
            section: 'settings',
            type: 'Title',
            label: {
                en: 'Events',
            },
            editorOnly: true,
        },

        // Title properties for Style
        generalStyleTitle: {
            section: 'style',
            type: 'Title',
            label: {
                en: 'General',
            },
            editorOnly: true,
        },
        headerStyleTitle: {
            section: 'style',
            type: 'Title',
            label: {
                en: 'Header',
            },
            editorOnly: true,
        },
        dayHeaderStyleTitle: {
            section: 'style',
            type: 'Title',
            label: {
                en: 'Day header',
            },
            editorOnly: true,
        },
        cellStyleTitle: {
            section: 'style',
            type: 'Title',
            label: {
                en: 'Cells',
            },
            editorOnly: true,
        },
        buttonStyleTitle: {
            section: 'style',
            type: 'Title',
            label: {
                en: 'Buttons',
            },
            editorOnly: true,
        },
        borderStyleTitle: {
            section: 'style',
            type: 'Title',
            label: {
                en: 'Borders',
            },
            editorOnly: true,
        },
        eventStyleTitle: {
            section: 'style',
            type: 'Title',
            label: {
                en: 'Events',
            },
            editorOnly: true,
        },
        timeGridStyleTitle: {
            section: 'style',
            type: 'Title',
            label: {
                en: 'Time Grid',
            },
            editorOnly: true,
        },
        // Appearance - Style Tab
        fontFamily: {
            label: { en: 'Font family' },
            type: 'FontFamily',
            section: 'style',
            bindable: true,
            defaultValue: null,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a string value for the font family',
            },
            /* wwEditor:end */
        },
        fontSize: {
            label: { en: 'Font size' },
            type: 'Length',
            section: 'style',
            bindable: true,
            responsive: true,
            defaultValue: '14px',
            options: {
                unitChoices: [
                    { value: 'px', label: 'px', min: 10, max: 50 },
                    { value: 'em', label: 'em', min: 1, max: 50 },
                    { value: 'rem', label: 'rem', min: 1, max: 50 },
                ],
                noRange: true,
            },
            responsive: true,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a string value for the font size (e.g., "14px")',
            },
            /* wwEditor:end */
        },
        fontWeight: {
            label: { en: 'Font weight' },
            type: 'TextSelect',
            section: 'style',
            bindable: true,
            responsive: true,
            defaultValue: '400',
            options: {
                options: [
                    { value: '100', label: '100 (Thin)' },
                    { value: '200', label: '200 (Extra Light)' },
                    { value: '300', label: '300 (Light)' },
                    { value: '400', label: '400 (Normal)' },
                    { value: '500', label: '500 (Medium)' },
                    { value: '600', label: '600 (Semi Bold)' },
                    { value: '700', label: '700 (Bold)' },
                    { value: '800', label: '800 (Extra Bold)' },
                    { value: '900', label: '900 (Black)' },
                ],
            },
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a string value for the font weight (100-900)',
            },
            /* wwEditor:end */
        },

        // Calendar Colors - Style Tab
        headerBackgroundColor: {
            label: { en: 'Background' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: null,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the header background',
            },
            /* wwEditor:end */
        },
        headerTextColor: {
            label: { en: 'Text color' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: null,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the header text',
            },
            /* wwEditor:end */
        },
        dayHeaderBackgroundColor: {
            label: { en: 'Background' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: null,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the day header background',
            },
            /* wwEditor:end */
        },
        dayHeaderTextColor: {
            label: { en: 'Text color' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: null,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the day header text',
            },
            /* wwEditor:end */
        },
        dayHeaderFontSize: {
            label: { en: 'Font size' },
            type: 'Length',
            section: 'style',
            bindable: true,
            responsive: true,
            defaultValue: '14px',
            options: {
                unitChoices: [
                    { value: 'px', label: 'px', min: 10, max: 50 },
                    { value: 'em', label: 'em', min: 1, max: 50 },
                    { value: 'rem', label: 'rem', min: 1, max: 50 },
                ],
                noRange: true,
            },
            responsive: true,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a string value for the font size (e.g., "14px")',
            },
            /* wwEditor:end */
        },
        dayHeaderFontWeight: {
            label: { en: 'Font weight' },
            type: 'TextSelect',
            section: 'style',
            bindable: true,
            responsive: true,
            defaultValue: '400',
            options: {
                options: [
                    { value: '100', label: '100 (Thin)' },
                    { value: '200', label: '200 (Extra Light)' },
                    { value: '300', label: '300 (Light)' },
                    { value: '400', label: '400 (Normal)' },
                    { value: '500', label: '500 (Medium)' },
                    { value: '600', label: '600 (Semi Bold)' },
                    { value: '700', label: '700 (Bold)' },
                    { value: '800', label: '800 (Extra Bold)' },
                    { value: '900', label: '900 (Black)' },
                ],
            },
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a string value for the font weight (100-900)',
            },
            /* wwEditor:end */
        },
        todayBackgroundColor: {
            label: { en: 'Today background' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: 'rgba(255, 220, 40, 0.15)',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: "Bind to a color value for today's cell background",
            },
            /* wwEditor:end */
        },
        cellBackgroundColor: {
            label: { en: 'Background' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: null,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the cell background',
            },
            /* wwEditor:end */
        },
        cellTextColor: {
            label: { en: 'Text color' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: null,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the cell text',
            },
            /* wwEditor:end */
        },
        weekendTextColor: {
            label: { en: 'Weekend text color' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: null,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the weekend text',
            },
            /* wwEditor:end */
        },
        otherMonthBackgroundColor: {
            label: { en: 'Other month background' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: null,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: "Bind to a color value for other month's days background",
            },
            /* wwEditor:end */
        },
        otherMonthTextColor: {
            label: { en: 'Other month text' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: null,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: "Bind to a color value for other month's days text",
            },
            /* wwEditor:end */
        },

        // Button Styling - Style Tab
        buttonBackgroundColor: {
            label: { en: 'Background' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: '#2C3E50',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the button background',
            },
            /* wwEditor:end */
        },
        buttonTextColor: {
            label: { en: 'Text color' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: '#FFFFFF',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the button text',
            },
            /* wwEditor:end */
        },
        buttonHoverBackgroundColor: {
            label: { en: 'Hover background' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: '#1e2b37',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the button hover background',
            },
            /* wwEditor:end */
        },
        buttonHoverTextColor: {
            label: { en: 'Hover text' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: '#FFFFFF',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the button text when hovered',
            },
            /* wwEditor:end */
        },
        buttonActiveBackgroundColor: {
            label: { en: 'Active background' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: '#1a252f',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the button active background',
            },
            /* wwEditor:end */
        },
        buttonActiveTextColor: {
            label: { en: 'Active text color' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: '#FFFFFF',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the button text when active',
            },
            /* wwEditor:end */
        },

        buttonBorderRadius: {
            label: { en: 'Border radius' },
            type: 'Length',
            section: 'style',
            bindable: true,
            defaultValue: '4px',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a string value for the button border radius',
            },
            /* wwEditor:end */
        },

        todayButtonBackgroundColor: {
            label: { en: 'Today button background' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: null,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the Today button background',
            },
            /* wwEditor:end */
        },
        todayButtonTextColor: {
            label: { en: 'Today button text color' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: null,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the Today button text',
            },
            /* wwEditor:end */
        },
        todayButtonHoverBackgroundColor: {
            label: { en: 'Today button hover background' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: null,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the Today button background on hover',
            },
            /* wwEditor:end */
        },
        todayButtonHoverTextColor: {
            label: { en: 'Today button hover text color' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: null,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the Today button text on hover',
            },
            /* wwEditor:end */
        },

        // Border Styling - Style Tab
        borderColor: {
            label: { en: 'Color' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: '#ddd',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the calendar borders',
            },
            /* wwEditor:end */
        },

        // Event Styling - Style Tab
        defaultEventBackgroundColor: {
            label: { en: 'Background' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: '#3788d8',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the default event background',
            },
            /* wwEditor:end */
        },
        defaultEventBorderColor: {
            label: { en: 'Border' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: '#3788d8',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the default event border',
            },
            /* wwEditor:end */
        },
        defaultEventTextColor: {
            label: { en: 'Text color' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: '#ffffff',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the default event text',
            },
            /* wwEditor:end */
        },

        // Dimensions - Style Tab
        headerHeight: {
            label: { en: 'Header height' },
            type: 'Length',
            section: 'style',
            bindable: true,
            responsive: true,
            defaultValue: null,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a string value for the header height (e.g., "50px")',
            },
            /* wwEditor:end */
        },
        dayHeaderHeight: {
            label: { en: 'Day header height' },
            type: 'Length',
            section: 'style',
            bindable: true,
            responsive: true,
            defaultValue: null,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a string value for the day header height (e.g., "30px")',
            },
            /* wwEditor:end */
        },

        // Indicators - Style Tab
        nowIndicatorColor: {
            label: { en: 'Now indicator Color' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: 'red',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the now indicator line',
            },
            propertyHelp: {
                tooltip: 'Set the color for the line indicating the current time',
            },
            /* wwEditor:end */
        },

        // View Settings - Settings Tab
        locale: {
            label: { en: 'Locale' },
            type: 'TextSelect',
            section: 'settings',
            bindable: true,
            defaultValue: 'auto',
            options: {
                options: [
                    { value: 'auto', label: 'Current Lang' },
                    { value: 'en', label: 'English' },
                    { value: 'fr', label: 'French' },
                    { value: 'es', label: 'Spanish' },
                    { value: 'de', label: 'German' },
                    { value: 'it', label: 'Italian' },
                    { value: 'pt', label: 'Portuguese' },
                    { value: 'ru', label: 'Russian' },
                    { value: 'zh-cn', label: 'Chinese (Simplified)' },
                    { value: 'ja', label: 'Japanese' },
                    { value: 'ar', label: 'Arabic' },
                ],
            },
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a string value for the locale code (e.g., "en", "fr")',
            },
            /* wwEditor:end */
        },
        yearView: {
            label: { en: 'Year view' },
            type: 'OnOff',
            section: 'settings',
            bindable: true,
            responsive: true,
            defaultValue: true,
            /* wwEditor:start */
            bindingValidation: {
                type: 'boolean',
                tooltip: 'Bind to a boolean value to enable/disable year view',
            },
            /* wwEditor:end */
        },
        monthView: {
            label: { en: 'Month view' },
            type: 'OnOff',
            section: 'settings',
            bindable: true,
            responsive: true,
            defaultValue: true,
            /* wwEditor:start */
            bindingValidation: {
                type: 'boolean',
                tooltip: 'Bind to a boolean value to enable/disable month view',
            },
            /* wwEditor:end */
        },
        weekView: {
            label: { en: 'Week view' },
            type: 'OnOff',
            section: 'settings',
            bindable: true,
            responsive: true,
            defaultValue: true,
            /* wwEditor:start */
            bindingValidation: {
                type: 'boolean',
                tooltip: 'Bind to a boolean value to enable/disable week view',
            },
            /* wwEditor:end */
        },
        dayView: {
            label: { en: 'Day view' },
            type: 'OnOff',
            section: 'settings',
            bindable: true,
            responsive: true,
            defaultValue: true,
            /* wwEditor:start */
            bindingValidation: {
                type: 'boolean',
                tooltip: 'Bind to a boolean value to enable/disable day view',
            },
            /* wwEditor:end */
        },
        listView: {
            label: { en: 'List view' },
            type: 'OnOff',
            section: 'settings',
            bindable: true,
            responsive: true,
            defaultValue: true,
            /* wwEditor:start */
            bindingValidation: {
                type: 'boolean',
                tooltip: 'Bind to a boolean value to enable/disable list view',
            },
            /* wwEditor:end */
        },
        defaultView: {
            label: { en: 'Default view' },
            type: 'TextSelect',
            section: 'settings',
            bindable: true,
            responsive: true,
            defaultValue: 'dayGridMonth',
            options: {
                options: [
                    { value: 'multiMonthYear', label: 'Year' },
                    { value: 'dayGridMonth', label: 'Month' },
                    { value: 'timeGridWeek', label: 'Week' },
                    { value: 'timeGridDay', label: 'Day' },
                    { value: 'listWeek', label: 'List' },
                ],
            },
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip:
                    'Bind to a string value for the default view: multiMonthYear | dayGridMonth | timeGridWeek | timeGridDay | listWeek',
            },
            /* wwEditor:end */
        },
        timezone: {
            label: { en: 'Timezone' },
            type: 'TextSelect',
            section: 'settings',
            bindable: true,
            defaultValue: 'local',
            options: {
                options: [
                    { value: 'local', label: 'Local Browser Time' },
                    { value: 'UTC', label: 'UTC' },
                    { value: 'America/New_York', label: 'America/New_York' },
                    { value: 'America/Chicago', label: 'America/Chicago' },
                    { value: 'America/Denver', label: 'America/Denver' },
                    { value: 'America/Los_Angeles', label: 'America/Los_Angeles' },
                    { value: 'Europe/London', label: 'Europe/London' },
                    { value: 'Europe/Paris', label: 'Europe/Paris' },
                    { value: 'Europe/Berlin', label: 'Europe/Berlin' },
                    { value: 'Asia/Tokyo', label: 'Asia/Tokyo' },
                    { value: 'Asia/Shanghai', label: 'Asia/Shanghai' },
                    { value: 'Australia/Sydney', label: 'Australia/Sydney' },
                ],
            },
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a string value for the timezone in IANA format (e.g., "UTC", "America/New_York")',
            },
            propertyHelp: {
                tooltip: 'Set the timezone for the calendar to display dates and times',
            },
            /* wwEditor:end */
        },
        allDaySlot: {
            label: { en: 'Show all-day events' },
            type: 'OnOff',
            section: 'settings',
            bindable: true,
            defaultValue: true,
            /* wwEditor:start */
            bindingValidation: {
                type: 'boolean',
                tooltip: 'Bind to a boolean value to show/hide the all-day slot',
            },
            /* wwEditor:end */
        },
        timeStart: {
            label: { en: 'Time start' },
            type: 'Text',
            section: 'settings',
            bindable: true,
            defaultValue: '00:00:00',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a string value for the start time in format "HH:MM:SS"',
            },
            propertyHelp: {
                tooltip: 'Set the start time for the calendar time grid (format: "HH:MM:SS")',
            },
            /* wwEditor:end */
        },
        timeEnd: {
            label: { en: 'Time end' },
            type: 'Text',
            section: 'settings',
            bindable: true,
            defaultValue: '24:00:00',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a string value for the end time in format "HH:MM:SS"',
            },
            propertyHelp: {
                tooltip: 'Set the end time for the calendar time grid (format: "HH:MM:SS")',
            },
            /* wwEditor:end */
        },
        hideWeekends: {
            label: { en: 'Hide weekends' },
            type: 'OnOff',
            section: 'settings',
            bindable: true,
            defaultValue: false,
            /* wwEditor:start */
            bindingValidation: {
                type: 'boolean',
                tooltip: 'Bind to a boolean value to hide/show weekends',
            },
            /* wwEditor:end */
        },
        startWeekOnSunday: {
            label: { en: 'Start week on Sunday' },
            type: 'OnOff',
            section: 'settings',
            bindable: true,
            defaultValue: false,
            /* wwEditor:start */
            bindingValidation: {
                type: 'boolean',
                tooltip: 'Bind to a boolean value to start week on Sunday/Monday',
            },
            /* wwEditor:end */
        },
        hideDaysOfWeek: {
            label: { en: 'Hide days of week' },
            type: 'Array',
            section: 'settings',
            bindable: true,
            defaultValue: [],
            options: {
                expandable: true,
                getItemLabel(item) {
                    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    return days[item] || `Day ${item}`;
                },
                item: {
                    type: 'TextSelect',
                    defaultValue: 0,
                    options: {
                        options: [
                            { value: 0, label: 'Sunday' },
                            { value: 1, label: 'Monday' },
                            { value: 2, label: 'Tuesday' },
                            { value: 3, label: 'Wednesday' },
                            { value: 4, label: 'Thursday' },
                            { value: 5, label: 'Friday' },
                            { value: 6, label: 'Saturday' },
                        ],
                    },
                },
            },
            /* wwEditor:start */
            bindingValidation: {
                type: 'array',
                tooltip: 'Bind to an array of numbers (0-6) representing days to hide (0=Sunday, 1=Monday, etc.)',
            },
            /* wwEditor:end */
        },

        // Events
        events: {
            label: { en: 'Events' },
            type: 'Array',
            section: 'settings',
            bindable: true,
            defaultValue: [
                {
                    id: 'wo-101',
                    title: 'Work Order — Implant Setup (Client #12)',
                    start: '2025-08-07T08:00:00',
                    end: '2025-08-07T08:45:00',
                    allDay: false,
                    backgroundColor: '#1565C0',
                    borderColor: '#1565C0',
                    textColor: '#ffffff',
                    eventType: 'work_order',
                    groupId: '101',
                },
                {
                    id: 'wo-102',
                    title: 'Work Order — Crown Prep (Client #14)',
                    start: '2025-08-07T09:00:00',
                    end: '2025-08-07T09:50:00',
                    allDay: false,
                    backgroundColor: '#AD1457',
                    borderColor: '#AD1457',
                    textColor: '#ffffff',
                    eventType: 'work_order',
                    groupId: '102',
                },
                {
                    id: 'wo-103',
                    title: 'Work Order — Denture Adjustment (Client #18)',
                    start: '2025-08-07T11:00:00',
                    end: '2025-08-07T11:45:00',
                    allDay: false,
                    backgroundColor: '#6A1B9A',
                    borderColor: '#6A1B9A',
                    textColor: '#ffffff',
                    eventType: 'work_order',
                    groupId: '103',
                },

                // Ambulatory Phases — WO 101
                {
                    id: 'amb-101a',
                    title: 'Amb Phase — Consultation (WO #101)',
                    start: '2025-08-07T08:50:00',
                    end: '2025-08-07T09:05:00',
                    allDay: false,
                    backgroundColor: '#1E88E5',
                    borderColor: '#1E88E5',
                    textColor: '#ffffff',
                    eventType: 'ambulatory_phase',
                    groupId: '101',
                },
                {
                    id: 'amb-101b',
                    title: 'Amb Phase — Imaging (WO #101)',
                    start: '2025-08-07T09:10:00',
                    end: '2025-08-07T09:25:00',
                    allDay: false,
                    backgroundColor: '#42A5F5',
                    borderColor: '#42A5F5',
                    textColor: '#ffffff',
                    eventType: 'ambulatory_phase',
                    groupId: '101',
                },
                {
                    id: 'amb-101c',
                    title: 'Amb Phase — Mock-up (WO #101)',
                    start: '2025-08-07T09:30:00',
                    end: '2025-08-07T09:45:00',
                    allDay: false,
                    backgroundColor: '#64B5F6',
                    borderColor: '#64B5F6',
                    textColor: '#ffffff',
                    eventType: 'ambulatory_phase',
                    groupId: '101',
                },
                {
                    id: 'amb-101d',
                    title: 'Amb Phase — Delivery (WO #101)',
                    start: '2025-08-07T09:50:00',
                    end: '2025-08-07T10:05:00',
                    allDay: false,
                    backgroundColor: '#90CAF9',
                    borderColor: '#90CAF9',
                    textColor: '#000000',
                    eventType: 'ambulatory_phase',
                    groupId: '101',
                },

                // Lab Phases — WO 101
                {
                    id: 'lab-101a',
                    title: 'Lab Phase — Model Prep (WO #101)',
                    start: '2025-08-07T10:10:00',
                    end: '2025-08-07T10:30:00',
                    allDay: false,
                    backgroundColor: '#BBDEFB',
                    borderColor: '#90CAF9',
                    textColor: '#000000',
                    eventType: 'laboratory_phase',
                    groupId: '101',
                },
                {
                    id: 'lab-101b',
                    title: 'Lab Phase — Milling (WO #101)',
                    start: '2025-08-07T10:35:00',
                    end: '2025-08-07T10:55:00',
                    allDay: false,
                    backgroundColor: '#E3F2FD',
                    borderColor: '#BBDEFB',
                    textColor: '#000000',
                    eventType: 'laboratory_phase',
                    groupId: '101',
                },
                {
                    id: 'lab-101c',
                    title: 'Lab Phase — Sintering (WO #101)',
                    start: '2025-08-07T11:00:00',
                    end: '2025-08-07T11:20:00',
                    allDay: false,
                    backgroundColor: '#E1F5FE',
                    borderColor: '#E3F2FD',
                    textColor: '#000000',
                    eventType: 'laboratory_phase',
                    groupId: '101',
                },
                {
                    id: 'lab-101d',
                    title: 'Lab Phase — Final Polish (WO #101)',
                    start: '2025-08-07T11:25:00',
                    end: '2025-08-07T11:45:00',
                    allDay: false,
                    backgroundColor: '#E0F7FA',
                    borderColor: '#E1F5FE',
                    textColor: '#000000',
                    eventType: 'laboratory_phase',
                    groupId: '101',
                },

                // Ambulatory Phases — WO 102
                {
                    id: 'amb-102a',
                    title: 'Amb Phase — Prep (WO #102)',
                    start: '2025-08-07T09:55:00',
                    end: '2025-08-07T10:10:00',
                    allDay: false,
                    backgroundColor: '#C2185B',
                    borderColor: '#C2185B',
                    textColor: '#ffffff',
                    eventType: 'ambulatory_phase',
                    groupId: '102',
                },
                {
                    id: 'amb-102b',
                    title: 'Amb Phase — Impression (WO #102)',
                    start: '2025-08-07T10:15:00',
                    end: '2025-08-07T10:30:00',
                    allDay: false,
                    backgroundColor: '#D81B60',
                    borderColor: '#D81B60',
                    textColor: '#ffffff',
                    eventType: 'ambulatory_phase',
                    groupId: '102',
                },
                {
                    id: 'amb-102c',
                    title: 'Amb Phase — Shade Match (WO #102)',
                    start: '2025-08-07T10:35:00',
                    end: '2025-08-07T10:50:00',
                    allDay: false,
                    backgroundColor: '#EC407A',
                    borderColor: '#EC407A',
                    textColor: '#ffffff',
                    eventType: 'ambulatory_phase',
                    groupId: '102',
                },
                {
                    id: 'amb-102d',
                    title: 'Amb Phase — Final Seating (WO #102)',
                    start: '2025-08-07T10:55:00',
                    end: '2025-08-07T11:10:00',
                    allDay: false,
                    backgroundColor: '#F8BBD0',
                    borderColor: '#F8BBD0',
                    textColor: '#000000',
                    eventType: 'ambulatory_phase',
                    groupId: '102',
                },

                // Lab Phases — WO 102
                {
                    id: 'lab-102a',
                    title: 'Lab Phase — Casting (WO #102)',
                    start: '2025-08-07T11:15:00',
                    end: '2025-08-07T11:35:00',
                    allDay: false,
                    backgroundColor: '#F48FB1',
                    borderColor: '#F06292',
                    textColor: '#000000',
                    eventType: 'laboratory_phase',
                    groupId: '102',
                },
                {
                    id: 'lab-102b',
                    title: 'Lab Phase — Staining (WO #102)',
                    start: '2025-08-07T11:40:00',
                    end: '2025-08-07T12:00:00',
                    allDay: false,
                    backgroundColor: '#F8BBD0',
                    borderColor: '#F48FB1',
                    textColor: '#000000',
                    eventType: 'laboratory_phase',
                    groupId: '102',
                },
                {
                    id: 'lab-102c',
                    title: 'Lab Phase — Assembly (WO #102)',
                    start: '2025-08-07T12:05:00',
                    end: '2025-08-07T12:25:00',
                    allDay: false,
                    backgroundColor: '#FCE4EC',
                    borderColor: '#F8BBD0',
                    textColor: '#000000',
                    eventType: 'laboratory_phase',
                    groupId: '102',
                },
                {
                    id: 'lab-102d',
                    title: 'Lab Phase — Packaging (WO #102)',
                    start: '2025-08-07T12:30:00',
                    end: '2025-08-07T12:50:00',
                    allDay: false,
                    backgroundColor: '#FFF0F5',
                    borderColor: '#FCE4EC',
                    textColor: '#000000',
                    eventType: 'laboratory_phase',
                    groupId: '102',
                },

                // Ambulatory Phases — WO 103
                {
                    id: 'amb-103a',
                    title: 'Amb Phase — Checkup (WO #103)',
                    start: '2025-08-07T12:55:00',
                    end: '2025-08-07T13:10:00',
                    allDay: false,
                    backgroundColor: '#8E24AA',
                    borderColor: '#8E24AA',
                    textColor: '#ffffff',
                    eventType: 'ambulatory_phase',
                    groupId: '103',
                },
                {
                    id: 'amb-103b',
                    title: 'Amb Phase — Imprint (WO #103)',
                    start: '2025-08-07T13:15:00',
                    end: '2025-08-07T13:30:00',
                    allDay: false,
                    backgroundColor: '#AB47BC',
                    borderColor: '#AB47BC',
                    textColor: '#ffffff',
                    eventType: 'ambulatory_phase',
                    groupId: '103',
                },
                {
                    id: 'amb-103c',
                    title: 'Amb Phase — Testing (WO #103)',
                    start: '2025-08-07T13:35:00',
                    end: '2025-08-07T13:50:00',
                    allDay: false,
                    backgroundColor: '#BA68C8',
                    borderColor: '#BA68C8',
                    textColor: '#ffffff',
                    eventType: 'ambulatory_phase',
                    groupId: '103',
                },
                {
                    id: 'amb-103d',
                    title: 'Amb Phase — Delivery (WO #103)',
                    start: '2025-08-07T13:55:00',
                    end: '2025-08-07T14:10:00',
                    allDay: false,
                    backgroundColor: '#CE93D8',
                    borderColor: '#CE93D8',
                    textColor: '#000000',
                    eventType: 'ambulatory_phase',
                    groupId: '103',
                },

                // Lab Phases — WO 103
                {
                    id: 'lab-103a',
                    title: 'Lab Phase — Denture Mold (WO #103)',
                    start: '2025-08-07T14:15:00',
                    end: '2025-08-07T14:30:00',
                    allDay: false,
                    backgroundColor: '#E1BEE7',
                    borderColor: '#CE93D8',
                    textColor: '#000000',
                    eventType: 'laboratory_phase',
                    groupId: '103',
                },
                {
                    id: 'lab-103b',
                    title: 'Lab Phase — Coloring (WO #103)',
                    start: '2025-08-07T14:35:00',
                    end: '2025-08-07T14:50:00',
                    allDay: false,
                    backgroundColor: '#F3E5F5',
                    borderColor: '#E1BEE7',
                    textColor: '#000000',
                    eventType: 'laboratory_phase',
                    groupId: '103',
                },
                {
                    id: 'lab-103c',
                    title: 'Lab Phase — Finishing (WO #103)',
                    start: '2025-08-07T14:55:00',
                    end: '2025-08-07T15:10:00',
                    allDay: false,
                    backgroundColor: '#F8EAF6',
                    borderColor: '#F3E5F5',
                    textColor: '#000000',
                    eventType: 'laboratory_phase',
                    groupId: '103',
                },
                {
                    id: 'lab-103d',
                    title: 'Lab Phase — Case Closed (WO #103)',
                    start: '2025-08-07T15:15:00',
                    end: '2025-08-07T15:30:00',
                    allDay: false,
                    backgroundColor: '#FAF2FB',
                    borderColor: '#F8EAF6',
                    textColor: '#000000',
                    eventType: 'laboratory_phase',
                    groupId: '103',
                },
            ],
            options: {
                expandable: true,
                getItemLabel(item) {
                    return item.title || 'Untitled Event';
                },
                item: {
                    type: 'Object',
                    defaultValue: {
                        id: '123',
                        title: 'Sample Event',
                        content: 'This is a sample event',
                        start: '',
                        end: '',
                        allDay: false,
                        backgroundColor: '#3788d8',
                        borderColor: '#3788d8',
                        textColor: '#ffffff',
                        data: null,
                        groupId: null,
                        eventType: 'default', // 🔹 New: event type
                    },
                    options: {
                        item: {
                            id: {
                                label: { en: 'ID' },
                                type: 'Text',
                                options: { placeholder: 'Event ID' },
                            },
                            title: {
                                label: { en: 'Title' },
                                type: 'Text',
                                options: { placeholder: 'Event Title' },
                            },
                            content: {
                                label: { en: 'Content' },
                                type: 'Textarea',
                                options: { placeholder: 'Event Description' },
                            },
                            start: {
                                label: { en: 'Start' },
                                type: 'Text',
                                options: { placeholder: 'YYYY-MM-DDTHH:MM:SS' },
                            },
                            end: {
                                label: { en: 'End' },
                                type: 'Text',
                                options: { placeholder: 'YYYY-MM-DDTHH:MM:SS' },
                            },
                            allDay: {
                                label: { en: 'All Day' },
                                type: 'OnOff',
                            },
                            backgroundColor: {
                                label: { en: 'Background Color' },
                                type: 'Color',
                            },
                            borderColor: {
                                label: { en: 'Border Color' },
                                type: 'Color',
                            },
                            textColor: {
                                label: { en: 'Text Color' },
                                type: 'Color',
                            },
                            data: {
                                label: { en: 'Data' },
                                type: 'Text',
                                options: { placeholder: '{ "key": "value" }' },
                            },
                            groupId: {
                                label: { en: 'Group ID' },
                                type: 'Text',
                                options: { placeholder: 'Group ID' },
                            },
                            eventType: {
                                label: { en: 'Event Type' },
                                type: 'Text',
                                options: { placeholder: 'ambulatory_phase, laboratory_phase, etc.' },
                            },
                        },
                    },
                },
            },
            /* wwEditor:start */
            bindingValidation: {
                type: 'array',
                tooltip: 'Bind to an array of event objects with required properties: id, title, start, end',
            },
            /* wwEditor:end */
        },
        // Event property mapping fields
        eventsIdFormula: {
            label: { en: 'ID Field' },
            type: 'Formula',
            section: 'settings',
            options: content => ({
                template: Array.isArray(content.events) && content.events.length > 0 ? content.events[0] : null,
            }),
            defaultValue: {
                type: 'f',
                code: "context.mapping?.['id']",
            },
            hidden: (content, sidepanelContent, boundProps) =>
                !Array.isArray(content.events) || !content.events?.length || !boundProps.events,
        },
        eventsTitleFormula: {
            label: { en: 'Title Field' },
            type: 'Formula',
            section: 'settings',
            options: content => ({
                template: Array.isArray(content.events) && content.events.length > 0 ? content.events[0] : null,
            }),
            defaultValue: {
                type: 'f',
                code: "context.mapping?.['title']",
            },
            hidden: (content, sidepanelContent, boundProps) =>
                !Array.isArray(content.events) || !content.events?.length || !boundProps.events,
        },
        eventsStartFormula: {
            label: { en: 'Start Date Field' },
            type: 'Formula',
            section: 'settings',
            options: content => ({
                template: Array.isArray(content.events) && content.events.length > 0 ? content.events[0] : null,
            }),
            defaultValue: {
                type: 'f',
                code: "context.mapping?.['start']",
            },
            hidden: (content, sidepanelContent, boundProps) =>
                !Array.isArray(content.events) || !content.events?.length || !boundProps.events,
        },
        eventsEndFormula: {
            label: { en: 'End Date Field' },
            type: 'Formula',
            section: 'settings',
            options: content => ({
                template: Array.isArray(content.events) && content.events.length > 0 ? content.events[0] : null,
            }),
            defaultValue: {
                type: 'f',
                code: "context.mapping?.['end']",
            },
            hidden: (content, sidepanelContent, boundProps) =>
                !Array.isArray(content.events) || !content.events?.length || !boundProps.events,
        },
        eventsAllDayFormula: {
            label: { en: 'All Day Field' },
            type: 'Formula',
            section: 'settings',
            options: content => ({
                template: Array.isArray(content.events) && content.events.length > 0 ? content.events[0] : null,
            }),
            defaultValue: {
                type: 'f',
                code: "context.mapping?.['allDay']",
            },
            hidden: (content, sidepanelContent, boundProps) =>
                !Array.isArray(content.events) || !content.events?.length || !boundProps.events,
        },
        eventsBackgroundColorFormula: {
            label: { en: 'Background Color Field' },
            type: 'Formula',
            section: 'settings',
            options: content => ({
                template: Array.isArray(content.events) && content.events.length > 0 ? content.events[0] : null,
            }),
            defaultValue: {
                type: 'f',
                code: "context.mapping?.['backgroundColor']",
            },
            hidden: (content, sidepanelContent, boundProps) =>
                !Array.isArray(content.events) || !content.events?.length || !boundProps.events,
        },
        eventsBorderColorFormula: {
            label: { en: 'Border Color Field' },
            type: 'Formula',
            section: 'settings',
            options: content => ({
                template: Array.isArray(content.events) && content.events.length > 0 ? content.events[0] : null,
            }),
            defaultValue: {
                type: 'f',
                code: "context.mapping?.['borderColor']",
            },
            hidden: (content, sidepanelContent, boundProps) =>
                !Array.isArray(content.events) || !content.events?.length || !boundProps.events,
        },
        eventsTextColorFormula: {
            label: { en: 'Text Color Field' },
            type: 'Formula',
            section: 'settings',
            options: content => ({
                template: Array.isArray(content.events) && content.events.length > 0 ? content.events[0] : null,
            }),
            defaultValue: {
                type: 'f',
                code: "context.mapping?.['textColor']",
            },
            hidden: (content, sidepanelContent, boundProps) =>
                !Array.isArray(content.events) || !content.events?.length || !boundProps.events,
        },
        eventsContentFormula: {
            label: { en: 'Content Field' },
            type: 'Formula',
            section: 'settings',
            options: content => ({
                template: Array.isArray(content.events) && content.events.length > 0 ? content.events[0] : null,
            }),
            defaultValue: {
                type: 'f',
                code: "context.mapping?.['content']",
            },
            hidden: (content, sidepanelContent, boundProps) =>
                !Array.isArray(content.events) || !content.events?.length || !boundProps.events,
        },
        eventsDataFormula: {
            label: { en: 'Data Field' },
            type: 'Formula',
            section: 'settings',
            options: content => ({
                template: Array.isArray(content.events) && content.events.length > 0 ? content.events[0] : null,
            }),
            defaultValue: {
                type: 'f',
                code: "context.mapping?.['data']",
            },
            hidden: (content, sidepanelContent, boundProps) =>
                !Array.isArray(content.events) || !content.events?.length || !boundProps.events,
        },
        eventsGroupIdFormula: {
            label: { en: 'Group ID Field' },
            type: 'Formula',
            section: 'settings',
            options: content => ({
                template: Array.isArray(content.events) && content.events.length > 0 ? content.events[0] : null,
            }),
            defaultValue: {
                type: 'f',
                code: "context.mapping?.['groupId']",
            },
            hidden: (content, sidepanelContent, boundProps) =>
                !Array.isArray(content.events) || !content.events?.length || !boundProps.events,
        },
        eventsEventTypeFormula: {
            label: { en: 'Event Type Field' },
            type: 'Formula',
            section: 'settings',
            options: content => ({
                template: Array.isArray(content.events) && content.events.length ? content.events[0] : null,
            }),
            defaultValue: {
                type: 'f',
                code: "context.mapping?.['event_type'] ?? context.mapping?.['eventType']",
            },
            hidden: (content, sidepanelContent, boundProps) =>
                !Array.isArray(content.events) || !content.events?.length || !boundProps.events,
            propertyHelp: {
                tooltip:
                    'Bind to your API field for the event type (e.g., work_order, laboratory_phase, ambulatory_phase).',
            },
        },
        // status of the event
        eventsEventStatusFormula: {
            label: { en: 'Status Field' },
            type: 'Formula',
            section: 'settings',
            options: content => ({
                template: Array.isArray(content.events) && content.events.length ? content.events[0] : null,
            }),
            defaultValue: {
                type: 'f',
                code: "context.mapping?.['status']",
            },
            hidden: (content, sidepanelContent, boundProps) =>
                !Array.isArray(content.events) || !content.events?.length || !boundProps.events,
            propertyHelp: {
                tooltip: 'Bind to your API field for the event status (e.g., nov, v izdelavi, dokončan).',
            },
        },

        buttonTextToday: {
            label: { en: '"Today" button text' },
            type: 'Text',
            section: 'settings',
            multilang: true,
            bindable: true,
            defaultValue: '',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a string value for the "Today" button text',
            },
            /* wwEditor:end */
        },
        buttonTextYear: {
            label: { en: '"Year" button text' },
            type: 'Text',
            section: 'settings',
            multilang: true,
            bindable: true,
            defaultValue: '',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a string value for the "Year" button text',
            },
            /* wwEditor:end */
        },
        buttonTextMonth: {
            label: { en: '"Month" button text' },
            type: 'Text',
            section: 'settings',
            multilang: true,
            bindable: true,
            defaultValue: '',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a string value for the "Month" button text',
            },
            /* wwEditor:end */
        },
        buttonTextWeek: {
            label: { en: '"Week" button text' },
            type: 'Text',
            section: 'settings',
            multilang: true,
            bindable: true,
            defaultValue: '',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a string value for the "Week" button text',
            },
            /* wwEditor:end */
        },
        buttonTextDay: {
            label: { en: '"Day" button text' },
            type: 'Text',
            section: 'settings',
            multilang: true,
            bindable: true,
            defaultValue: '',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a string value for the "Day" button text',
            },
            /* wwEditor:end */
        },
        buttonTextList: {
            label: { en: '"List" button text' },
            type: 'Text',
            section: 'settings',
            multilang: true,
            bindable: true,
            defaultValue: '',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a string value for the "List" button text',
            },
            /* wwEditor:end */
        },
        noEventsText: {
            label: { en: 'No events text' },
            type: 'Text',
            section: 'settings',
            multilang: true,
            bindable: true,
            defaultValue: '',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a string value for the text shown when no events are available',
            },
            propertyHelp: {
                tooltip: 'The text to display when there are no events to show',
            },
            /* wwEditor:end */
        },

        // Adding new property for time grid background
        timeGridBackgroundColor: {
            label: { en: 'Background' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: null,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the time grid background',
            },
            /* wwEditor:end */
        },
        showHeader: {
            label: { en: 'Header' },
            type: 'OnOff',
            section: 'settings',
            bindable: true,
            defaultValue: true,
            /* wwEditor:start */
            bindingValidation: {
                type: 'boolean',
                tooltip: 'Toggle to show or hide the calendar header/toolbar.',
            },
            propertyHelp: {
                tooltip: 'Controls the visibility of the calendar header/toolbar.',
            },
            /* wwEditor:end */
        },
        disableInteractions: {
            label: { en: 'Readonly' },
            type: 'OnOff',
            section: 'settings',
            bindable: true,
            defaultValue: false,
            /* wwEditor:start */
            bindingValidation: {
                type: 'boolean',
                tooltip: 'Toggle to disable interactions like event creation and dragging.',
            },
            propertyHelp: {
                tooltip: 'Controls whether users can interact with the calendar to create or modify events.',
            },
            /* wwEditor:end */
        },
    },
    triggerEvents: [
        {
            name: 'eventClick',
            label: { en: 'On event click' },
            event: {
                value: {
                    id: 'event1',
                    title: 'Sample Event',
                    start: new Date().toISOString(),
                    end: new Date(new Date().getTime() + 3600000).toISOString(),
                    allDay: false,
                    backgroundColor: '#3788d8',
                    borderColor: '#3788d8',
                    textColor: '#ffffff',
                    content: 'This is a sample event',
                    eventType: 'default', // 🔹 New: event type
                },
            },
        },
        {
            name: 'viewChange',
            label: { en: 'On view change' },
            event: {
                value: {
                    view: 'dayGridMonth',
                    start: new Date().toISOString(),
                    end: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString(),
                    title: 'Month View',
                },
            },
        },
        {
            name: 'eventCreated',
            label: { en: 'On event created' },
            event: {
                value: {
                    start: new Date().toISOString(),
                    end: new Date(new Date().getTime() + 3600000).toISOString(),
                    allDay: false,
                },
            },
        },
        {
            name: 'eventUpdated',
            label: { en: 'On event updated' },
            event: {
                value: {
                    id: 'event1',
                    title: 'Updated Event',
                    start: new Date().toISOString(),
                    end: new Date(new Date().getTime() + 3600000).toISOString(),
                    allDay: false,
                    backgroundColor: '#3788d8',
                    borderColor: '#3788d8',
                    textColor: '#ffffff',
                    content: 'This event was updated',
                },
            },
        },
        {
            name: 'eventDragStart',
            label: { en: 'On event drag start' },
            event: {
                value: {
                    id: 'event1',
                    title: 'Dragging Event',
                    start: new Date().toISOString(),
                    end: new Date(new Date().getTime() + 3600000).toISOString(),
                    allDay: false,
                },
            },
        },
        {
            name: 'eventDragEnd',
            label: { en: 'On event drag end' },
            event: {
                value: {
                    id: 'event1',
                    title: 'Dragged Event',
                    start: new Date().toISOString(),
                    end: new Date(new Date().getTime() + 3600000).toISOString(),
                    allDay: false,
                },
            },
        },
        {
            name: 'eventDrop',
            label: { en: 'On event drop' },
            event: {
                value: {
                    id: 'event1',
                    title: 'Dropped Event',
                    start: new Date().toISOString(),
                    end: new Date(new Date().getTime() + 3600000).toISOString(),
                    allDay: false,
                    delta: { days: 1, milliseconds: 0 },
                },
            },
        },
        {
            name: 'eventResizeStart',
            label: { en: 'On event resize start' },
            event: {
                value: {
                    id: 'event1',
                    title: 'Resizing Event',
                    start: new Date().toISOString(),
                    end: new Date(new Date().getTime() + 3600000).toISOString(),
                    allDay: false,
                },
            },
        },
        {
            name: 'eventResize',
            label: { en: 'On event resize' },
            event: {
                value: {
                    id: 'event1',
                    title: 'Resized Event',
                    start: new Date().toISOString(),
                    end: new Date(new Date().getTime() + 7200000).toISOString(),
                    allDay: false,
                    startDelta: { days: 0, milliseconds: 0 },
                    endDelta: { days: 0, milliseconds: 3600000 },
                },
            },
        },
    ],
    actions: [
        {
            action: 'changeView',
            label: { en: 'Change view' },
            args: [
                {
                    name: 'viewName',
                    type: 'select',
                    options: [
                        { value: 'multiMonthYear', label: 'multiMonthYear' },
                        { value: 'dayGridMonth', label: 'dayGridMonth' },
                        { value: 'timeGridWeek', label: 'timeGridWeek' },
                        { value: 'timeGridDay', label: 'timeGridDay' },
                        { value: 'listWeek', label: 'listWeek' },
                    ],
                },
            ],
        },
        {
            action: 'goToDate',
            label: { en: 'Go to date' },
            args: [
                {
                    name: 'date',
                    type: 'string',
                },
            ],
        },
        {
            action: 'next',
            label: { en: 'Next period' },
        },
        {
            action: 'prev',
            label: { en: 'Previous period' },
        },
        {
            action: 'today',
            label: { en: 'Go to today' },
        },
    ],
};
