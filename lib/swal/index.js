import Swal from 'sweetalert2'

export async function fireProfileModal(inputContent) {

  const defaultContent = {
    title: 'Default',
    inputLabel: 'Default',
    inputPlaceholder: 'Please enter....'
  };

  const { value: input } = await Swal.fire({
    ...defaultContent,
    ...inputContent
  })

  return input;
}