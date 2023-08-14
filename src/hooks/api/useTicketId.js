import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketApi from '../../services/ticketsApi';

export default function useTicketId() {
  const token = useToken();
  
  const {
    data: ticketId,
    loading: ticketIdLoading,
    error: ticketIdError,
    act: getTicketId
  } = useAsync(() => ticketApi.getTicket(token));

  return {
    ticketId,
    ticketIdLoading,
    ticketIdError,
    getTicketId
  };
}
