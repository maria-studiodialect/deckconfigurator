import Select from 'react-select'

const customStyles = {
  control: () => ({
    // none of react-select's styles are passed to <Control />
    border: 0,
    border: '1px solid #2F2727',
    display: 'flex',
    width: '100%',
    boxShadow: 'none',
    color: '#2F2727',
  }),
}

const CustomSelect = ({ opt, ph, change }) => (
  <Select
    options={opt}
    placeholder={ph}
    styles={customStyles}
    className='mt-10 w-full'
    components={{ IndicatorSeparator: () => null }}
    theme={(theme) => ({
      ...theme,
      borderRadius: 0,
      colors: {
        ...theme.colors,
        primary25: '#F5F5F5',
        primary: 'rgb(146 146 146)',
        primary50: 'rgb(146 146 146)',
      },
    })}
    onChange={change}
  />
)

export default CustomSelect
