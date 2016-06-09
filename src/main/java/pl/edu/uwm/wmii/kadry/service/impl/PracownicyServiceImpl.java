package pl.edu.uwm.wmii.kadry.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pl.edu.uwm.wmii.kadry.dto.PracownikDTO;
import pl.edu.uwm.wmii.kadry.ob.PracownikOB;
import pl.edu.uwm.wmii.kadry.repository.IPracownikRepository;
import pl.edu.uwm.wmii.web.rest.util.OrikaBeanMapper;

import java.util.List;

/**
 * Created by wojciech.baczewski on 2016-03-29.
 */
@Service
@Transactional
public class PracownicyServiceImpl {

    @Autowired
    private IPracownikRepository pracownikRepository;

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
