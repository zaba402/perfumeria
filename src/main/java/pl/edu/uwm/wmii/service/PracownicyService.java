package pl.edu.uwm.wmii.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.edu.uwm.wmii.domain.PracownikOB;
import pl.edu.uwm.wmii.repository.PracownikRepository;
import pl.edu.uwm.wmii.web.rest.dto.PracownikDTO;
import pl.edu.uwm.wmii.web.rest.util.OrikaBeanMapper;

import java.util.List;

/**
 * Created by wojciech.baczewski on 2016-03-29.
 */
@Service
public class PracownicyService {

    @Autowired
    private PracownikRepository pracownikRepository;

    @Autowired
    private OrikaBeanMapper mapper;

    public List<PracownikDTO> findAll() {
        return mapper.mapAsList(pracownikRepository.findAll(), PracownikDTO.class);
    }

    public void save(PracownikDTO pracownikDTO){
         pracownikRepository.save(mapper.map(pracownikDTO,PracownikOB.class));
    }

    public void delete(Long id){
        pracownikRepository.delete(id);
    }
}
