import Network from './Network';

export default interface Device {
  id: number;
  name: string;
  description: string;
  os: string;
  dhcp: boolean;
  ipAddress: string;
  macAddress: string;
  network: Network;
}
